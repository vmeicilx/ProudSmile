import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

function resize() {

  if (window.innerWidth > 1200) {
    // const canvas: any = document.getElementById("hero-lightpass-PV");
    // const canvasFramer: any = document.getElementsByClassName("canvas-framer")[0];

    // if (canvas && canvasFramer) {
    //   canvasFramer.style.width = canvas.getBoundingClientRect().width + 2 + "px";
    //   canvasFramer.style.height = canvas.getBoundingClientRect().height + 2 + "px";
    // }
    const canvas: any = document.getElementById("hero-lightpass-pvweb");
    const canvasFramer: any = document.getElementsByClassName("canvas-framer")[0];

    if (canvas && canvasFramer) {
      canvasFramer.style.width = canvas.getBoundingClientRect().width + "px";
      canvasFramer.style.height = canvas.getBoundingClientRect().height + 2 + "px";
    }
  }
  else {
    const canvas: any = document.getElementById("hero-lightpass-PV");
    const canvasContainer: any = document.getElementById("PVCanvasContainer");

    if (canvas && canvasContainer) {
      canvasContainer.style.width = canvas.getBoundingClientRect().width + "px";
      canvasContainer.style.height = canvas.getBoundingClientRect().height + "px";
    }
  }

}

window.onresize = resize;

function startAnimationMobile() {
  const canvas: any = document.getElementById("hero-lightpass-PV");
  const context = canvas.getContext("2d");
  const animationContainer: any = document.getElementById(
    "PVAnimationContainer"
  );
  document.body.style.overflow = "hidden";

  let startValue = "top 146px";
  let endValue = "+=4000"

  canvas.width = 600;
  canvas.height = 308;

  const frameCount = 156;

  const currentFrame = (index) =>
    `../../../../assets/aesthetics/PV/PV mobile/PV mobile ${(
      index + 1
    )
      .toString()
      .padStart(3, "0")}.jpg`;
  const images = [];
  const frames = {
    frame: 0,
  };

  let loadedImages = 0;

  animationContainer.style.display = "none";

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    img.onload = countImages;
    images.push(img);
  }

  gsap.to(frames, {
    frame: frameCount - 1,
    snap: "frame",
    scrollTrigger: {
      id: "ScrollTriggerPV",
      trigger: "#hero-lightpass-PV",
      start: startValue,
      end: endValue,
      markers: false,
      scrub: 1,
      pin: "#PVFirstSection"
    },
    onUpdate: render,
  });

  function countImages() {
    loadedImages = loadedImages + 1;
    if (loadedImages === frameCount) {
      animationContainer.style.display = "block";
      render();
      ScrollTrigger.refresh();
    }
  }

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[frames.frame], 0, 0);
    resize()
  }

  const imageToFade2 = document.getElementById("ImageToFade2");

  var t2 = gsap.timeline({

    scrollTrigger: {
      id: "ImageFade2",
      trigger: '#ImageToFade2',
      start: '4000px bottom-=200',
      end: '+=400',
      scrub: true,
      markers: false
    }

  })

  t2
    .to(imageToFade2, { opacity: 0 }, 0)
    .to(imageToFade2, { opacity: 0.25 }, 0.25)
    .to(imageToFade2, { opacity: 0.5 }, 0.5)
    .to(imageToFade2, { opacity: 0.75 }, 0.75)
    .to(imageToFade2, { opacity: 1 }, 1);

}

function startAnimation() {
  const canvas: any = document.getElementById("hero-lightpass-pvweb");
  const context = canvas.getContext("2d");
  const loadingText: any = document.getElementById("LoadingTextPVWeb");
  const animationContainer: any = document.getElementById(
    "PVWebCanvasContainer"
  );
  const buttons: any = document.getElementById("PVWebBottomButtons");
  const canvasFramer: any = document.getElementsByClassName("canvas-framer")[0];

  document.body.style.overflow = "hidden";

  let startValue = "top top";
  let endValue = "+=20000"
  canvas.width = 1364;
  canvas.height = 700;

  canvasFramer.style.width = canvas.getBoundingClientRect().width + "px";
  canvasFramer.style.height = canvas.getBoundingClientRect().height + "px";

  const frameCount = 540;
  const currentFrame = (index) =>
    `../../../../assets/aesthetics/PV/PV web/Porcelain Veneers_Web ${(
      index + 1
    )
      .toString()
      .padStart(3, "0")}.jpg`;


  const images = [];
  const frames = {
    frame: 0,
  };

  let loadedImages = 0;

  loadingText.style.display = "flex";
  animationContainer.style.display = "none";
  buttons.style.display = "none";

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    img.onload = countImages;
    images.push(img);
  }


  function countImages() {
    loadedImages = loadedImages + 1;
    if (loadedImages === frameCount) {
      loadingText.style.display = "none";
      animationContainer.style.display = "block";
      buttons.style.display = "flex";

      gsap.to(frames, {
        frame: frameCount - 1,
        snap: "frame",
        scrollTrigger: {
          id: "ScrollTriggerPVWeb",
          trigger: "#PVWebCanvasContainer",
          start: startValue,
          end: endValue,
          markers: false,
          scrub: 1,
          pin: true
        },
        onUpdate: render,
      });
      render();
      ScrollTrigger.refresh();
    }
  }

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[frames.frame], 0, 0);
    resize()
  }

}



@Component({
  selector: "app-porcelain-veneers",
  templateUrl: "./porcelain-veneers.component.html",
  styleUrls: ["./porcelain-veneers.component.scss"],
})
export class PorcelainVeneersComponent implements OnInit {

  @ViewChild("goopyVideo") goopyVideo: ElementRef;
  @ViewChild("smileVideo") smileVideo: ElementRef;
  @ViewChild("makeVideo") makeVideo: ElementRef;

  @ViewChild("SuggestionButton") suggestionButton: ElementRef;
  @ViewChild("SuggestionButtonUp") suggestionButtonUp: ElementRef;

  currentFrame = 0;
  framePositions = [
    540, 4240, 4940, 5740, 6220, 7220, 9320, 12420, 14620, 17120, 19520
  ];

  firstFramePosition = 240;
  lastFramePosition = 20120;

  constructor(private router: Router, private title: Title, private meta: Meta) { 
    this.title.setTitle("Bespoke Porcelain Veneers | Gold Coast | Proud Smile");
    this.meta.addTags([{
      name: 'description',
      content: `A stunning smile is not longer for the genetic blessed individuals. You too can have the smile of your dreams with Porcelain Veneers. Book your Free Smile Assessment now.`
    }, { name: 'keywords', content: 'veneers gold coast, porcelain veneers gold coast, dental veneers gold coast' }]);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {

    if (window.innerWidth > 1200) {

      startAnimation();
      this.suggestionButton.nativeElement.style.display = "none";
      this.suggestionButtonUp.nativeElement.style.display = "none";
      resize();
    }
    else {
      startAnimationMobile();
      resize();

      this.goopyVideo.nativeElement.muted = true;
      this.goopyVideo.nativeElement.style.display = "block";
      this.smileVideo.nativeElement.muted = true;
      this.smileVideo.nativeElement.style.display = "block";
      this.makeVideo.nativeElement.muted = true;
      this.makeVideo.nativeElement.style.display = "block";
    }
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {
    if (window.innerWidth <= 1200) {

      let playPromise1;
      if (ScrollTrigger.isInViewport(this.goopyVideo.nativeElement)) {
        playPromise1 = this.goopyVideo.nativeElement.play();
      }
      else {
        if (playPromise1 !== undefined) {
          playPromise1.then(_ => {
            this.goopyVideo.nativeElement.pause();
          })
            .catch(error => {
            });
        }
      }

      let playPromise2;
      if (ScrollTrigger.isInViewport(this.smileVideo.nativeElement)) {
        playPromise2 = this.smileVideo.nativeElement.play();
      }
      else {
        if (playPromise2 !== undefined) {
          playPromise2.then(_ => {
            this.smileVideo.nativeElement.pause();
          })
            .catch(error => {
            });
        }
      }

      let playPromise3;
      if (ScrollTrigger.isInViewport(this.makeVideo.nativeElement)) {
        playPromise3 = this.makeVideo.nativeElement.play();
      }
      else {
        if (playPromise3 !== undefined) {
          playPromise3.then(_ => {
            this.makeVideo.nativeElement.pause();
          })
            .catch(error => {
            });
        }
      }
    }
    else {
      if (window.scrollY >= this.firstFramePosition && window.scrollY < this.framePositions[this.framePositions.length - 1]) {
        this.suggestionButton.nativeElement.style.display = "block";
      } else {
        this.suggestionButton.nativeElement.style.display = "none";
      }

      if (window.scrollY > this.firstFramePosition + 100 && window.scrollY <= this.lastFramePosition) {
        this.suggestionButtonUp.nativeElement.style.display = "block";
      }
      else {
        this.suggestionButtonUp.nativeElement.style.display = "none";
      }
    }

  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
  }

  seeGallery() {
    this.router.navigate(["/", "BeforeAndAfter"]);
  }

  setCurrentFrame() {
    for (var i = 0; i < this.framePositions.length - 1; i++) {
      if (window.scrollY < this.framePositions[0]) {
        this.currentFrame = 0;
        break;
      }
      if (window.scrollY >= this.framePositions[i] && window.scrollY < this.framePositions[i + 1]) {
        this.currentFrame = i + 1;
        break;
      }
      if (window.scrollY >= this.framePositions[this.framePositions.length - 1]) {
        this.currentFrame = this.framePositions.length - 1;
        break;
      }
    }
  }

  onNextClick() {
    this.setCurrentFrame();
    window.scrollTo({
      top: this.framePositions[this.currentFrame],
      left: 0,
      behavior: 'smooth'
    });
  }

  onRevertClick() {
    window.scrollTo({
      top: this.firstFramePosition,
      left: 0,
      behavior: "smooth",
    });
  }
}
