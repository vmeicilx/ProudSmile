import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
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
  @ViewChild("scrollFramer") scrollFramer: ElementRef;
  @ViewChild("scrollFramerContainer") scrollFramerContainer: ElementRef;

  observable: any;
  observer: any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.start();
  }

  async start() {
    const videoContainer = document.querySelector("#ScrollFramerContainer");
    const animationContainer = document.querySelector(
      "#AnimationContainer"
    ) as HTMLElement;

    const frames = await this.FrameUnpacker.unpack({
      urlPattern: this.urlPattern,
      start: 1,
      end: this.numberOfFrames,
      padding: 0
    });

    const canvas = document.createElement("canvas");
    canvas.classList.add("scroll-framer-canvas");
    canvas.height = frames[0].height;
    canvas.width = frames[0].width;
    canvas.style.maxWidth = "100vw";
    const context = canvas.getContext("2d");
    context.drawImage(frames[0], 0, 0);

    videoContainer.appendChild(canvas);
    animationContainer.style.height = this.animationFactor + "px";

    this.observer = this.CanvasFrameScrubber.create(context, frames);

    this.observable = new ScrollObservable();

    this.observable.subscribe(this.observer);
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
                createImageBitmap(blob).then((bitmap) =>
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
}

function ScrollObservable() {
  this._observers = [];
  const videoContainer = document.querySelector("#ScrollFramerContainer");

  // using RAF as a petty debounce
  let inProgress = false;
  const handler = () => {
    if (inProgress) return;
    inProgress = true;

    window.requestAnimationFrame(() => {
      this._process(videoContainer);

      inProgress = false;
    });
  };

  window.addEventListener("scroll", handler);
}

ScrollObservable.prototype._process = function (videoContainer) {
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
