import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-scroll-framer-section',
  templateUrl: './scroll-framer-section.component.html',
  styleUrls: ['./scroll-framer-section.component.scss']
})
export class ScrollFramerSectionComponent implements OnInit {

  private startSubscription: Subscription;
  private stopSubscription: Subscription;

  @Input() startAnimation: Observable<void>;
  @Input() stopAnimation: Observable<void>;
  @Input() urlPattern: string;
  @Input() animationFactor: number;
  @Input() numberOfFrames: number;
  @Input() padding: number;
  @Input() isLastSection: number;
  @Output() onFramesLoaded: EventEmitter<any> = new EventEmitter();
  @Output() onAnimationEnd: EventEmitter<any> = new EventEmitter();
  @Output() onAnimationStart: EventEmitter<any> = new EventEmitter();
  @ViewChild("scrollFramer") scrollFramer: ElementRef;
  @ViewChild("scrollFramerContainer") scrollFramerContainer: ElementRef;
  @ViewChild("animation") animation: ElementRef;
  @ViewChild("ScrollCanvas") scrollCanvas: ElementRef;

  observer: any;

  startAnim = false;
  initialScrollPosition = null;

  _observers;

  constructor() {}

  ngOnInit(): void {
    this.startSubscription = this.startAnimation.subscribe(() => {
      this.startAnim = true;
    });
    this.stopSubscription = this.stopAnimation.subscribe(() => {
      this.startAnim = false;
    });
  }

  ngAfterViewInit() {
    this.start();
  }

  ngOnDestroy(): void {
    this._observers = [];
    this.observer = null;
    this.startSubscription.unsubscribe();
    this.stopSubscription.unsubscribe();
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

    //const canvas = document.createElement("canvas");
    //canvas.classList.add("scroll-framer-canvas");
    this.scrollCanvas.nativeElement.height = frames[0].height;
    this.scrollCanvas.nativeElement.width = frames[0].width;

    if(frames[0].width >= window.innerWidth)
    {
      this.scrollCanvas.nativeElement.classList.remove("vertical-size");
      this.scrollCanvas.nativeElement.classList.add("horizontal-size");
    }
    else if(frames[0].height > window.innerHeight)
    {
      this.scrollCanvas.nativeElement.classList.remove("horizontal-size");
      this.scrollCanvas.nativeElement.classList.add("vertical-size");
    }

    //canvas.style.maxWidth = "100vw";
    //canvas.style.width = "100vw";
    videoContainer.style.background = "black";
    const context = this.scrollCanvas.nativeElement.getContext("2d");
    context.drawImage(frames[0], 0, 0);

    //videoContainer.appendChild(canvas);

    animationContainer.style.height = this.animationFactor + "px";

    this.observer = this.CanvasFrameScrubber.create(context, frames);

    this.ScrollObservable(this.isLastSection);

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

  ScrollObservable(isLastSection) {
    this._observers = [];
    //const videoContainer = document.querySelector("#ScrollFramerContainer");
    const videoContainer = this.scrollFramerContainer.nativeElement;

    // using RAF as a petty debounce
    let inProgress = false;
    const handler = () => {
      if (inProgress) return;
      inProgress = true;

      window.requestAnimationFrame(() => {
        this._process(videoContainer, isLastSection);

        inProgress = false;
      });
    };

    window.addEventListener("scroll", handler);
  }

  _process = function (videoContainer, isLastSection) {
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

    if(this.startAnim)
    {
      this.onAnimationStart.emit();
      videoContainer.style.position = "absolute";
      videoContainer.style.top = 0;
      videoContainer.style.bottom = "unset";
      if (!this.initialScrollPosition) {
        this.initialScrollPosition = scrolled;
      }
      scrolled = scrolled - this.initialScrollPosition;
    }
    else
    {
      scrolled = 0;
    }

      // if (parentRect.top > 0) {
      //   videoContainer.style.position = "absolute";
      //   videoContainer.style.top = 0;
      //   videoContainer.style.bottom = "unset";
      //   //videoContainer.style.visibility = "hidden";
      //   //videoContainer.children[1].style.display = "none";
      //   this.onAnimationEnd.emit();
      //   scrolled = 0;
      // } else if (parentRect.top + animationRect.height - videoRect.height < 0) {
      //   videoContainer.style.position = "absolute";
      //   videoContainer.style.top = "unset";
      //   videoContainer.style.bottom = 0;
      //   if(!isLastSection)
      //   {
      //     videoContainer.style.visibility = "hidden";
      //   }
      //   //videoContainer.children[1].style.display = "none";
      //   scrolled = 0;
      //   this.onAnimationEnd.emit();
      // } else {
      //   this.onAnimationStart.emit();
      //   videoContainer.style.position = "fixed";
      //   videoContainer.style.top = 0;
      //   videoContainer.style.bottom = "unset";
      //   videoContainer.style.visibility = "visible";
      //   //videoContainer.children[1].style.display = "block";
      //   if (!this.initialScrollPosition) {
      //     this.initialScrollPosition = scrolled;
      //   }
      //   scrolled = scrolled - this.initialScrollPosition;
      // }

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
