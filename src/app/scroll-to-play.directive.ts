import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
declare var $: any;

@Directive({
  selector: '[appScrollToPlay]',
})
export class ScrollToPlayDirective {
  private elRef: ElementRef;
  private renderer: Renderer2;

  private frameNumber = 0;
  private playbackConst = 300;
  private timer: any;
  private scrollPos = 0;
  private videoFwd;
  private videoBwd;
  private requestId = null;
  private scrollRequest = 0;
  private scrollerY = 0;
  private scrollEase = 0.05;
  private times = [];
  private pos = [];
  private velocity;
  private scrollPosition;

  constructor(el: ElementRef, renderer: Renderer2) {
    this.elRef = el;
    this.renderer = renderer;
  }

  ngOnInit() {
    //this.elRef.nativeElement.pause();
    //this.elRef.nativeElement.addEventListener('loadedmetadata', function() {
    //  this.renderer.parentNode(this.elRef.nativeElement).firstChild.style.height = Math.floor(this.elRef.nativeElement.duration) * this.playbackConst + "px";
    //}.bind(this));
    window.addEventListener('scroll', this.scroll, true);
    //window.requestAnimationFrame(this.scrollPlay.bind(this));
  }

  ngAfterViewInit() {
    //use here
    // $(this.elRef.nativeElement).playOnScroll({
    //   reverse: true,
    //   scrollThrottle: 100
    // });

    this.videoFwd = document.querySelector("#bgVideoFwd");
    this.videoBwd = document.querySelector("#bgVideoBwd");
    this.videoFwd.playbackRate = 0;
    this.videoBwd.playbackRate = 0;

    this.elRef.nativeElement.addEventListener(
      "onCustomScroll",
      function (e) {
        this.videoFwd.currentTime = 0;
        if(this.videoBwd.duration)
        {
          this.videoBwd.currentTime = this.videoBwd.duration;
        }
        else{
          this.videoBwd.currentTime = 0;
        }
        this.scrollPosition = e.detail.position;
        this.onScroll();
        //window.addEventListener("wheel", onScroll);
      }.bind(this),
      false
    );
    //window.addEventListener("wheel", this.onScroll);
  }

  ngOnDestroy() {
    //window.removeEventListener('scroll', this.scroll, true);
  }

  updateScroller = (): void => {

    var scrollY = this.scrollPosition;
    this.scrollerY += (scrollY - this.scrollerY) * this.scrollEase;

    if (Math.abs(scrollY - this.scrollerY) < 0.05) {
      this.scrollerY = scrollY;
      this.scrollRequest = 0;
      this.pos = [];
      this.times = [];
    }

    const timenow = performance.now();
    const posnow = this.scrollerY;
    if (this.times.length == 0) {
      this.times[0] = timenow;
      this.pos[0] = posnow;
      this.velocity = 0;
    } else if (this.times.length == 1) {
      this.times[1] = timenow;
      this.pos[1] = posnow;
      this.velocity = ((this.pos[1] - this.pos[0]) / (this.times[1] - this.times[0])) * 1000;
    } else {
      this.times = [this.times[1], timenow];
      this.pos = [this.pos[1], posnow];
      this.velocity = ((this.pos[1] - this.pos[0]) / (this.times[1] - this.times[0])) * 1000;
    }

    console.log(Math.round(this.scrollerY) + " px");
    //info.currPos = Math.round(scrollerY) + " px";
    //info.currVel = Math.round(velocity) + " px/s";

    var videoRate = Math.round(this.velocity) / 250;
    var limitLow = 0.15; //playbackRate min
    var limitHigh = 15; //playbackRate max
    var duration = 60.12; // video duration

    if (videoRate >= limitLow && videoRate <= limitHigh) {
      this.videoFwd.play();
      //TweenLite.set("#bgVideoFwd", { autoAlpha: 1 });
      //TweenLite.set("#bgVideoBwd", { autoAlpha: 0 });
      this.videoFwd.playbackRate = Math.abs(videoRate);
      this.videoBwd.currentTime = duration - this.videoFwd.currentTime;
    } else if (videoRate <= -limitLow && videoRate >= -limitHigh) {
      this.videoBwd.play();
      //TweenLite.set("#bgVideoBwd", { autoAlpha: 1 });
      //TweenLite.set("#bgVideoFwd", { autoAlpha: 0 });
      this.videoBwd.playbackRate = Math.abs(videoRate);
      this.videoFwd.currentTime = duration - this.videoBwd.currentTime;
    } else if (videoRate > 0 && videoRate < limitLow) {
      this.videoFwd.playbackRate = 0;
      this.videoBwd.playbackRate = 0;
      this.videoBwd.currentTime = duration - this.videoFwd.currentTime;
    } else if (videoRate > -limitLow && videoRate < 0) {
      this.videoFwd.playbackRate = 0;
      this.videoBwd.playbackRate = 0;
      this.videoFwd.currentTime = duration - this.videoBwd.currentTime;
    } else if (videoRate == 0) {
      this.videoFwd.playbackRate = 0;
      this.videoBwd.playbackRate = 0;
    }

    this.requestId =
    this.scrollRequest > 0 ? requestAnimationFrame(this.updateScroller) : null;
  }

  onScroll = (event): void => {
    this.scrollRequest++;
    if (!this.requestId) {
      this.requestId = requestAnimationFrame(this.updateScroller);
    }
  }

  scroll = (event): void => {
    var forwardVideo = this.elRef.nativeElement;
    var parentNode = forwardVideo.parentNode;
    var backwardVideo = this.renderer.nextSibling(forwardVideo);

    var yPosition = parentNode.getBoundingClientRect().y;

    var scrollDown = true;

    // detects new state and compares it with the new one
    if (document.body.getBoundingClientRect().top > this.scrollPos)
      scrollDown = false;
    // saves the new position for iteration.
    this.scrollPos = document.body.getBoundingClientRect().top;

    if (
      yPosition <= 0 &&
      scrollDown &&
      this.elRef.nativeElement.currentTime === 0 &&
      !parentNode.classList.contains('scrollToPlay')
    ) {
      this.renderer.addClass(parentNode, 'scrollToPlay');
      this.renderer.addClass(forwardVideo, 'playingVideo');
      this.elRef.nativeElement.dispatchEvent(new Event('click'));
      // this.elRef.nativeElement.dispatchEvent(
      //   new CustomEvent('canPlay')
      // );
    }
    if (forwardVideo.ended) {
      this.renderer.removeClass(parentNode, 'scrollToPlay');
      this.renderer.removeClass(forwardVideo, 'playingVideo');
    }
    if (!scrollDown && backwardVideo.currentTime === backwardVideo.duration) {
      this.renderer.removeClass(parentNode, 'scrollToPlay');
      this.renderer.removeClass(backwardVideo, 'playingVideo');
    }
  };

  // scrollPlay(){
  //   var frameNumber  = window.pageYOffset/this.playbackConst;
  //   console.log(frameNumber);
  //   this.elRef.nativeElement.currentTime  = frameNumber;
  //   window.requestAnimationFrame(this.scrollPlay.bind(this));
  // }

  // scroll = (event): void => {
  //   var yPosition = this.elRef.nativeElement.getBoundingClientRect().y;

  //   if(yPosition < 0)
  //   {
  //     //document.body.style.overflow = 'hidden';
  //     this.renderer.addClass(this.renderer.nextSibling(this.elRef.nativeElement), "fakeDiv");
  //     this.renderer.addClass(this.elRef.nativeElement, "scrollVideo");
  //     window.addEventListener('wheel', this.wheel, true);
  //     console.log("a intrat in scroll", yPosition)
  //   }
  //   else if(yPosition >= 0 && (this.elRef.nativeElement.ended || this.elRef.nativeElement.currentTime === 0))
  //   {
  //     console.log("a asdsads in scroll", yPosition)
  //     //this.renderer.removeClass(this.renderer.nextSibling(this.elRef.nativeElement), "fakeDiv");
  //     this.renderer.removeClass(this.elRef.nativeElement, "scrollVideo");
  //   }

  //   // this.elRef.nativeElement.play();
  //   // if (!this.timer) {
  //   //   this.timer = setTimeout(function () {
  //   //     if (this.idx == this.myarr.length) this.idx = 0;
  //   //     this.elRef.nativeElement.pause();
  //   //     this.timer = false;
  //   //   }, this.myarr[this.idx++]);
  //   // }
  // };

  // wheel = (event): void => {
  //   this.elRef.nativeElement.currentTime = this.idx;

  //   if (event.deltaY < 0)
  //   {
  //     //this.elRef.nativeElement.reverse();
  //     setTimeout(function() {
  //       //this.elRef.nativeElement.pause();
  //     }.bind(this), 500);
  //     this.idx -= 0.5
  //   }
  //   else if (event.deltaY > 0)
  //   {
  //     //this.elRef.nativeElement.play();
  //     setTimeout(function() {
  //       //this.elRef.nativeElement.pause();
  //     }.bind(this), 500);
  //     this.idx += 0.5
  //   }
  //   console.log('a intrat', this.idx);

  // };

  // @HostListener('mouseenter') onMouseEnter() {
  // }

  // @HostListener('scroll') onScroll() {
  // }
}
