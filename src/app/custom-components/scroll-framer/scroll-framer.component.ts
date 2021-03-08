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
  @Input() specialView: boolean;
  @Output() onFramesLoaded: EventEmitter<any> = new EventEmitter();
  @ViewChild("scrollFramer") scrollFramer: ElementRef;
  @ViewChild("scrollFramerContainer") scrollFramerContainer: ElementRef;
  @ViewChild("animation") animation: ElementRef;

  observable: any;
  observer: any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.start();
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
    const videoContainer = document.querySelector(
      "#ScrollFramerContainer"
    ) as HTMLElement;
    if (this.specialView) {
      videoContainer.style.position = "fixed";
      videoContainer.style.zIndex = "100";
    } else {
      videoContainer.style.position = "relative";
    }
    const animationContainer = document.querySelector(
      "#AnimationContainer"
    ) as HTMLElement;

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
    //canvas.style.maxWidth = "100vw";
    canvas.style.width = "100vw";
    const context = canvas.getContext("2d");
    context.drawImage(frames[0], 0, 0);

    videoContainer.appendChild(canvas);
    animationContainer.style.height = this.animationFactor + "px";

    this.observer = this.CanvasFrameScrubber.create(context, frames);

    this.observable = new ScrollObservable(this.specialView);

    this.observable.subscribe(this.observer);
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
    let scrubberFrames;
    const create = (context, frames) => {
      scrubberFrames = frames;
      let currentFrame = 0;

      const observer = {
        next: (percentage) => {
          const frameIndex = Math.floor(
            (percentage * (scrubberFrames.length - 1)) / 100
          );

          if (
            currentFrame === frameIndex ||
            frameIndex >= scrubberFrames.length ||
            frameIndex < 0
          )
            return;

          window.requestAnimationFrame(() => {
            context.drawImage(scrubberFrames[frameIndex], 0, 0);
          });
        }
      };

      return observer;
    };

    const update = (f) => {
      scrubberFrames = scrubberFrames.concat(f);
    };
    return {
      create: create,
      update: update
    };
  })();
}

function ScrollObservable(specialView) {
  this._observers = [];
  const videoContainer = document.querySelector("#ScrollFramerContainer");

  // using RAF as a petty debounce
  let inProgress = false;
  const handler = () => {
    if (inProgress) return;
    inProgress = true;

    window.requestAnimationFrame(() => {
      this._process(videoContainer, specialView);

      inProgress = false;
    });
  };

  window.addEventListener("scroll", handler);
}

ScrollObservable.prototype._process = function (videoContainer, specialView) {
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

  if (parentRect.bottom < viewportHeight) {
    //videoContainer.style.position = "absolute";
    if (specialView) {
      videoContainer.style.position = "fixed";
    } else {
      videoContainer.style.position = "relative";
    }
    videoContainer.style.bottom = 0;
    videoContainer.style.top = "unset";
    scrolled = 0;
  } else if (
    parentRect.bottom - animationRect.height + videoRect.height >
    viewportHeight
  ) {
    //videoContainer.style.position = "absolute";
    if (specialView) {
      videoContainer.style.position = "fixed";
    } else {
      videoContainer.style.position = "relative";
    }
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

  const scrolledPercentage =
    Math.round(
      (100 * (100 * scrolled)) / (animationRect.height - viewportHeight)
    ) / 100;

  this.publish(scrolledPercentage);
};

ScrollObservable.prototype.subscribe = function (observer) {
  if (!this._observers.includes(observer)) {
    this._observers.push(observer);
  }
};
ScrollObservable.prototype.unsubscribe = function (observer) {
  if (this._observers.includes(observer)) {
    this._observers.splice(observer);
  }
};

ScrollObservable.prototype.publish = function (value) {
  this._observers.forEach((observer) => {
    observer.next(value);
  });
};
