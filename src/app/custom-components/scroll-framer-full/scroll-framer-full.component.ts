import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-scroll-framer-full",
  templateUrl: "./scroll-framer-full.component.html",
  styleUrls: ["./scroll-framer-full.component.scss"],
})
export class ScrollFramerFullComponent implements OnInit {
  @Input() urlPattern: string;
  @Input() animationFactor: number;
  @Input() numberOfFrames: number;
  @Input() padding: number;
  @Input() topScroll: boolean;
  @Output() onFramesLoaded: EventEmitter<any> = new EventEmitter();
  @Output() onVideoPreStart: EventEmitter<any> = new EventEmitter();
  @Output() onVideoStart: EventEmitter<any> = new EventEmitter();
  @Output() onVideoEnd: EventEmitter<any> = new EventEmitter();
  @ViewChild("scrollFramer") scrollFramer: ElementRef;
  @ViewChild("scrollFramerContainer") scrollFramerContainer: ElementRef;
  @ViewChild("animation") animation: ElementRef;
  @ViewChild("ScrollCanvas") scrollCanvas: ElementRef;
  @ViewChild("FrameAround") FrameAround: ElementRef;
  @ViewChild("CanvasClone") CanvasClone: ElementRef;
  @ViewChild("MobileSuggestion") MobileSuggestion: ElementRef;

  observer: any;

  _observers;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.start();
    this.showorHideMobileSuggestion();
  }

  ngOnDestroy(): void {
    this._observers = [];
    this.observer = null;
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.showorHideMobileSuggestion();
  }

  showorHideMobileSuggestion(): void {
    if(this.scrollFramerContainer.nativeElement.style.position === "fixed" && window.innerWidth < 600 && window.innerWidth < window.innerHeight) {
        this.MobileSuggestion.nativeElement.style.display = "block";
    }
    else {
      this.MobileSuggestion.nativeElement.style.display = "none";
    }
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  createImageBitmap2 = async function (blob) {
    return new Promise((resolve, reject) => {
      let img = document.createElement("img");
      img.addEventListener("load", function () {
        resolve(this);
      });
      img.src = URL.createObjectURL(blob);
    });
  };

  async start() {
    const videoContainer = this.scrollFramerContainer.nativeElement;
    const animationContainer = this.animation.nativeElement;

    let frames = await this.FrameUnpacker.unpack({
      urlPattern: this.urlPattern,
      start: 1,
      end: this.numberOfFrames,
      padding: this.padding,
    });

    this.scrollCanvas.nativeElement.height = frames[0].height;
    this.scrollCanvas.nativeElement.width = frames[0].width;

    if (frames[0].width >= window.innerWidth) {
      this.scrollCanvas.nativeElement.classList.remove("vertical-size");
      this.scrollCanvas.nativeElement.classList.add("horizontal-size");
      this.CanvasClone.nativeElement.classList.remove("vertical-size");
      this.CanvasClone.nativeElement.classList.add("horizontal-size");
      this.CanvasClone.nativeElement.style.height =
        (window.innerWidth / frames[0].width) * frames[0].height + "px";
    }
    //else if(frames[0].height > window.innerHeight)
    else {
      this.scrollCanvas.nativeElement.classList.remove("horizontal-size");
      this.scrollCanvas.nativeElement.classList.add("vertical-size");
      this.CanvasClone.nativeElement.classList.remove("horizontal-size");
      this.CanvasClone.nativeElement.classList.add("vertical-size");
      this.CanvasClone.nativeElement.style.width =
        (window.innerHeight / frames[0].height) * frames[0].width + "px";
    }


    if (this.topScroll) {
      videoContainer.style.background = "black";
      videoContainer.style.paddingTop = "20px";
    }
    const context = this.scrollCanvas.nativeElement.getContext("2d");
    try {
      context.drawImage(frames[0], 0, 0)
    } catch (error) {
      console.log("Could not draw image at index 0");
    }
    

    if (this.topScroll) {
      const fadeDiv = document.createElement("div");
      fadeDiv.style.width = "100vw";
      fadeDiv.style.height = "200px";
      fadeDiv.style.position = "absolute";
      fadeDiv.style.bottom = "-200px";
      fadeDiv.classList.add("background-48");
      videoContainer.appendChild(fadeDiv);
    }

    animationContainer.style.height = this.animationFactor + "px";

    this.observer = this.CanvasFrameScrubber.create(context, frames);

    this.ScrollObservable(this.topScroll);

    this.subscribe(this.observer);
    this.onFramesLoaded.emit();
  }

  FrameUnpacker = (() => {
    const unpack = async (options) => {
      const urlPattern = options.urlPattern,
        start = options.start,
        end = options.end,
        padding = options.padding;

      const bitmaps = [];
      const calls = [];

      // download each frame image and prep it up
      for (let index = start; index <= end; index++) {
        const id = index.toString().padStart(padding, "0");
        const url = urlPattern.replace("##id##", id);

        calls.push(
          fetch(url).then((res) =>
            res
              .blob()
              .then((blob) =>
                "createImageBitmap" in window
                  ? createImageBitmap(blob).then((bitmap) =>
                      bitmaps.push({ id: index, bitmap: bitmap })
                    )
                  : this.createImageBitmap2(blob).then((bitmap) =>
                      bitmaps.push({ id: index, bitmap: bitmap })
                    )
              )
          )
        );
      }

      // wait for all the downloads to finish... (a more eager implementation that starts putting
      // the scrubbing as soon as the first few frames are downloaded can also be done, but we'll
      // keep thing s simple for now)
      await Promise.all(calls);

      // sort the downloaded frame bitmaps in order, they could have been downloaded haphazardly
      bitmaps.sort((a, b) => {
        return a.id - b.id;
      });

      // once that's done, construct an array of just frames that would be returned
      const frames = [];
      bitmaps.map((bitmap) => frames.push(bitmap.bitmap));

      return frames;
    };

    return {
      unpack: unpack,
    };
  })();

  CanvasFrameScrubber = (() => {
    const create = (context, frames) => {
      let currentFrame = 0;

      const observer = {
        next: (percentage) => {
          const frameIndex = Math.floor(
            (percentage * (frames.length - 1)) / 100
          );

          if (
            currentFrame === frameIndex ||
            frameIndex >= frames.length ||
            frameIndex < 0
          )
            return;

          window.requestAnimationFrame(() => {
            try {
              context.drawImage(frames[frameIndex], 0, 0);
            } catch (error) {
              console.log("Could not draw image at index " + frameIndex);
            }
          });
        },
      };

      return observer;
    };
    return {
      create: create,
    };
  })();

  ScrollObservable(topScroll) {
    this._observers = [];
    //const videoContainer = document.querySelector("#ScrollFramerContainer");
    const videoContainer = this.scrollFramerContainer.nativeElement;

    // using RAF as a petty debounce
    let inProgress = false;
    const handler = () => {
      if (inProgress) return;
      inProgress = true;

      window.requestAnimationFrame(() => {
        this._process(
          videoContainer,
          topScroll,
          this.onVideoStart,
          this.onVideoEnd,
          this.onVideoPreStart
        );

        inProgress = false;
      });
    };

    window.addEventListener("scroll", handler);
  }

  _process = function (
    videoContainer,
    topScroll,
    onVideoStart: EventEmitter<any>,
    onVideoEnd: EventEmitter<any>,
    onVideoPrestart: EventEmitter<any>
  ) {
    const viewportHeight = document.documentElement.clientHeight;
    let scrolled = Math.max(
      window.scrollY,
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );

    let parentRect =
      videoContainer.parentElement.parentElement.parentElement.parentElement.getBoundingClientRect();
    let animationRect = videoContainer.parentElement.getBoundingClientRect();
    let videoRect = videoContainer.getBoundingClientRect();

    if (parentRect.bottom === 0 && parentRect.top === 0) {
      return;
    }

    if (topScroll) {
      if (parentRect.top > 0) {
        onVideoEnd.emit();
        videoContainer.style.position = "absolute";
        videoContainer.style.top = 0;
        videoContainer.style.bottom = "unset";
        videoContainer.children[1].style.display = "none";
        scrolled = 0;
      } else if (parentRect.top + animationRect.height - videoRect.height < 0) {
        onVideoPrestart.emit();
        videoContainer.style.position = "absolute";
        videoContainer.style.top = "unset";
        videoContainer.style.bottom = 0;
        videoContainer.children[1].style.display = "none";
        scrolled = 0;
      } else {
        onVideoStart.emit();
        videoContainer.style.position = "fixed";
        videoContainer.style.top = 0;
        videoContainer.style.bottom = "unset";
        videoContainer.children[1].style.display = "block";
        if (!this.initialScrollPosition) {
          this.initialScrollPosition = scrolled;
        }
        scrolled = scrolled - this.initialScrollPosition;
      }
    } else {
      if (parentRect.bottom < viewportHeight) {
        onVideoEnd.emit({
          height: this.CanvasClone.nativeElement.style.height,
        });
        videoContainer.style.position = "absolute";
        videoContainer.style.bottom = 0;
        videoContainer.style.top = "unset";
        scrolled = 0;
        (
          document.documentElement.getElementsByTagName(
            "app-header"
          )[0] as HTMLElement
        ).style.display = "block";
      } else if (
        parentRect.bottom - animationRect.height + videoRect.height >
        viewportHeight
      ) {
        onVideoPrestart.emit({
          height: this.CanvasClone.nativeElement.style.height,
        });
        videoContainer.style.position = "absolute";
        videoContainer.style.bottom = "unset";
        videoContainer.style.top = 0;
        scrolled = 0;
        (
          document.documentElement.getElementsByTagName(
            "app-header"
          )[0] as HTMLElement
        ).style.display = "block";
      } else {
          onVideoStart.emit({
            height: this.CanvasClone.nativeElement.style.height,
          });
          videoContainer.style.position = "fixed";
          videoContainer.style.bottom = 0;
          videoContainer.style.top = "unset";
          (
            document.documentElement.getElementsByTagName(
              "app-header"
            )[0] as HTMLElement
          ).style.display = "none";

        if (!this.initialScrollPosition) {
          this.initialScrollPosition = scrolled;
        }
        scrolled = scrolled - this.initialScrollPosition;
      }
    }

    const scrolledPercentage =
      Math.round(
        (100 * (100 * scrolled)) / (animationRect.height - viewportHeight)
      ) / 100;

      this.showorHideMobileSuggestion();

    this.publish(scrolledPercentage);
  };

  subscribe = function (observer) {
    if (!this._observers.includes(observer)) {
      this._observers.push(observer);
    }
  };
  unsubscribe = function (observer) {
    if (this._observers.includes(observer)) {
      this._observers.splice(observer);
    }
  };

  publish = function (value) {
    this._observers.forEach((observer) => {
      observer.next(value);
    });
  };
}
