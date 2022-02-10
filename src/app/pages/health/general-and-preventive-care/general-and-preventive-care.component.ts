import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from "@angular/core";
import { Router } from "@angular/router";

function resize() {
  const canvas: any = document.getElementById("hero-lightpass-chair");
  const canvasContainer: any = document.getElementById("ChairCanvasContainer");

  if(canvas && canvasContainer) {
    canvasContainer.style.width = canvas.getBoundingClientRect().width + "px";
    canvasContainer.style.height = canvas.getBoundingClientRect().height + "px";
  }
}

window.onresize = resize;

function startAnimation() {
  const canvas: any = document.getElementById("hero-lightpass-chair");
  const context = canvas.getContext("2d");
  const animationContainer: any = document.getElementById(
    "ChairAnimationContainer"
  );
  document.body.style.overflow = "hidden";

  let topValue = 129;

  if (window.innerWidth < 1200) {
    topValue = 80;
  }

  let framesPath = "chair";
  //let startValue = "top " + topValue + "px";
  let startValue = "bottom bottom";
  //let endValue = "bottom bottom"
  let endValue = "+=2000"
  if(window.innerWidth < 1200) {
    framesPath = "chair mobile";
    canvas.width = 640;
    canvas.height = 360;
  }
  else
  {
    canvas.width = 1280;
    canvas.height = 720;
  }

  const frameCount = 57;
  const currentFrame = (index) =>
    `../../../../assets/healthPage/GeneralAndPreventive/${framesPath}/Chair ${(
      index + 1
    )
      .toString()
      .padStart(2, "0")}.jpg`;

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
      id: "ScrollTriggerChair",
      trigger: "#hero-lightpass-chair",
      start: startValue,
      end: endValue,
      markers: false,
      scrub: 1,
      pin: "#ChairFirstSection"
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

}

@Component({
  selector: "app-general-and-preventive-care",
  templateUrl: "./general-and-preventive-care.component.html",
  styleUrls: ["./general-and-preventive-care.component.scss"]
})
export class GeneralAndPreventiveCareComponent implements OnInit {
  @ViewChild("firstVideo") video: ElementRef;
  @ViewChild("PerfectTeeths") PerfectTeeths: ElementRef;
  @ViewChild("Maximize") mazimizeEl: ElementRef;
  @ViewChild("backToGrid") backToGrid: ElementRef;

  id: number;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.video.nativeElement.muted = true;
    this.video.nativeElement.style.display = "block";

    startAnimation();
    resize()
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {

    let playPromise1;
    if (ScrollTrigger.isInViewport(this.video.nativeElement)) {
      playPromise1 = this.video.nativeElement.play();
    } else {
      if (playPromise1 !== undefined) {
        playPromise1
          .then((_) => {
            this.video.nativeElement.pause();
          })
          .catch((error) => {});
      }
    }
  }

  seeAllFinancial() {
    this.router.navigate(["/", "payment-page-component"]);
  }

  maximize(ev) {
    this.PerfectTeeths.nativeElement.style.transform = "translate(10vw, -40vh)";
    setTimeout(() => {
      this.PerfectTeeths.nativeElement.style.width = "50vw";
      this.PerfectTeeths.nativeElement.src="../../../../assets/healthPage/GeneralAndPreventive/WhiteFillingsFull.png"
      this.backToGrid.nativeElement.style.display = "block";
    }, 1500)
  }

  onBackToGridClick() {
    this.backToGrid.nativeElement.style.display = "none";
    this.PerfectTeeths.nativeElement.src="../../../../assets/healthPage/GeneralAndPreventive/teeth.png"
    this.PerfectTeeths.nativeElement.style.width = "20vw";
    setTimeout(() => {
      this.PerfectTeeths.nativeElement.style.transform = "translate(0, 0)";
    }, 1000)
  }
  
  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
