import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-scroll-framer",
  templateUrl: "./scroll-framer.component.html",
  styleUrls: ["./scroll-framer.component.scss"]
})
export class ScrollFramerComponent implements OnInit {
  @Input() urlPattern: string;
  @Input() animationFactor: number;
  @Input() numberOfFrames: number;
  @Input() padding: number;
  @Input() topScroll: boolean;
  @Output() onFramesLoaded: EventEmitter<any> = new EventEmitter();
  @ViewChild("scrollFramer") scrollFramer: ElementRef;
  @ViewChild("scrollFramerContainer") scrollFramerContainer: ElementRef;
  @ViewChild("animation") animation: ElementRef;

  observer: any;

  _observers;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.start();
  }

  ngOnDestroy(): void {
    this._observers = [];
    this.observer = null;
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
      padding: this.padding
    });

    const canvas = document.createElement("canvas");
    canvas.classList.add("scroll-framer-canvas");
    canvas.height = frames[0].height;
    canvas.width = frames[0].width;
    canvas.style.maxWidth = "100vw";
    if (this.topScroll) {
      canvas.style.width = "52vw";
    }
    if (this.topScroll) {
      videoContainer.style.background = "black";
      videoContainer.style.paddingTop = "20px";
    }
    const context = canvas.getContext("2d");
    context.drawImage(frames[0], 0, 0);

    videoContainer.appendChild(canvas);
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

    // while (frames.length < this.numberOfFrames) {
    //   let end = frames.length + this.magicNumber;
    //   if (end > this.numberOfFrames) {
    //     end = this.numberOfFrames;
    //   }
    //   const f = await this.FrameUnpacker.unpack({
    //     urlPattern: this.urlPattern,
    //     start: frames.length + 1,
    //     end: end,
    //     padding: this.padding
    //   });
    //   frames = frames.concat(f);
    //   this.CanvasFrameScrubber.update(f);
    // }
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
      unpack: unpack
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
            context.drawImage(frames[frameIndex], 0, 0);
          });
        }
      };

      return observer;
    };
    return {
      create: create
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
        this._process(videoContainer, topScroll);

        inProgress = false;
      });
    };

    window.addEventListener("scroll", handler);
  }

  _process = function (videoContainer, topScroll) {
    const viewportHeight = document.documentElement.clientHeight;
    const documentHeight = document.body.clientHeight;
    let scrolled = Math.max(
      window.scrollY,
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );

    let parentRect = videoContainer.parentElement.parentElement.parentElement.parentElement.getBoundingClientRect();
    let animationRect = videoContainer.parentElement.getBoundingClientRect();
    let videoRect = videoContainer.getBoundingClientRect();

    if (topScroll) {
      if (parentRect.top > 0) {
        videoContainer.style.position = "absolute";
        videoContainer.style.top = 0;
        videoContainer.style.bottom = "unset";
        videoContainer.children[1].style.display = "none";
        scrolled = 0;
      } else if (parentRect.top + animationRect.height - videoRect.height < 0) {
        videoContainer.style.position = "absolute";
        videoContainer.style.top = "unset";
        videoContainer.style.bottom = 0;
        videoContainer.children[1].style.display = "none";
        scrolled = 0;
      } else {
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
        videoContainer.style.position = "absolute";
        videoContainer.style.bottom = 0;
        videoContainer.style.top = "unset";
        scrolled = 0;
      } else if (
        parentRect.bottom - animationRect.height + videoRect.height >
        viewportHeight
      ) {
        videoContainer.style.position = "absolute";
        videoContainer.style.bottom = "unset";
        videoContainer.style.top = 0;
        scrolled = 0;
      } else {
        videoContainer.style.position = "fixed";
        videoContainer.style.bottom = 0;
        videoContainer.style.top = "unset";
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
