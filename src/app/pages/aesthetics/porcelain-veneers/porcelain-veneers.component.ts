import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";

function resize() {
  const canvas: any = document.getElementById("hero-lightpass-PV");
  const canvasContainer: any = document.getElementById("PVCanvasContainer");

  if(canvas && canvasContainer) {
    canvasContainer.style.width = canvas.getBoundingClientRect().width + "px";
    canvasContainer.style.height = canvas.getBoundingClientRect().height + "px";
  }
}

window.onresize = resize;

function startAnimation() {
  const canvas: any = document.getElementById("hero-lightpass-PV");
  const context = canvas.getContext("2d");
  const animationContainer: any = document.getElementById(
    "PVAnimationContainer"
  );
  document.body.style.overflow = "hidden";

  let startValue = "top top";
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
      markers: true
    }
    
  })
  
  t2
  .to(imageToFade2, { opacity: 0}, 0)  
  .to(imageToFade2, { opacity: 0.25}, 0.25)  
  .to(imageToFade2, { opacity: 0.5}, 0.5)  
  .to(imageToFade2, { opacity: 0.75}, 0.75)  
  .to(imageToFade2, { opacity: 1}, 1);

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    startAnimation();
    resize();
    
    this.goopyVideo.nativeElement.muted = true;
    this.goopyVideo.nativeElement.style.display = "block";
    this.smileVideo.nativeElement.muted = true;
    this.smileVideo.nativeElement.style.display = "block";
    this.makeVideo.nativeElement.muted = true;
    this.makeVideo.nativeElement.style.display = "block";
  }


  goToLink(url: string) {
    window.open(url, "_blank");
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {
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

  seeGallery() {
    this.router.navigate(["/", "BeforeAndAfter"]);
  }

}
