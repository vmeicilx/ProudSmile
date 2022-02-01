import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { ScrollFramerSectionComponent } from "src/app/custom-components/scroll-framer-section/scroll-framer-section.component";


function resize() {
  const canvas: any = document.getElementById("hero-lightpass");
  const canvasFramer: any = document.getElementsByClassName("canvas-framer")[0];
  const mobileSuggestion = document.getElementById("MobileSuggestion");

  canvasFramer.style.width = canvas.getBoundingClientRect().width + "px";
  canvasFramer.style.height = canvas.getBoundingClientRect().height + 2 + "px";

  if (window.innerWidth < 600 && window.innerWidth < window.innerHeight) {
    mobileSuggestion.style.display = "flex";
  } else {
    mobileSuggestion.style.display = "none";
  }
}

window.onresize = resize;

function startAnimation() {
  const canvas: any = document.getElementById("hero-lightpass");
  const context = canvas.getContext("2d");
  const loadingText: any = document.getElementById("LoadingTextUltraThin");
  const animationContainer: any = document.getElementById(
    "UltraThinAnimationContainer"
  );
  const buttons: any = document.getElementById("UltraThinBottomButtons");
  const canvasFramer: any = document.getElementsByClassName("canvas-framer")[0];
  document.body.style.overflow = "hidden";

  let topValue = 217;

  if (window.innerWidth < 1200) {
    topValue = 144;
  }

  canvas.width = 1364;
  canvas.height = 700;

  canvasFramer.style.width = canvas.getBoundingClientRect().width + "px";
  canvasFramer.style.height = canvas.getBoundingClientRect().height + 2 + "px";

  const frameCount = 460;
  const currentFrame = (index) =>
    `../../../../assets/aesthetics/UltraThinVeneers/Ultra Thin Veneers ${(
      index + 1
    )
      .toString()
      .padStart(3, "0")}.jpg`;

  const images = [];
  const frames = {
    frame: 0,
  };

  let loadedImages = 0;

  loadingText.style.display = "block";
  animationContainer.style.display = "none";
  buttons.style.display = "none";

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
      id: "ScrollTriggerUltra",
      trigger: "#UltraThinAnimationContainer",
      onEnter: () => {
        canvas.classList.add("canvas-in-viewport");
        canvasFramer.classList.add("canvas-in-viewport");
      },
      onEnterBack: () => {
        canvas.classList.add("canvas-in-viewport");
        canvasFramer.classList.add("canvas-in-viewport");
        canvas.parentElement.classList.remove("canvas-container-end");
      },
      onLeave: () => {
        canvas.classList.remove("canvas-in-viewport");
        canvasFramer.classList.remove("canvas-in-viewport");
        canvas.parentElement.classList.add("canvas-container-end");
      },
      onLeaveBack: () => {
        canvas.classList.remove("canvas-in-viewport");
        canvasFramer.classList.remove("canvas-in-viewport");
      },
      start: topValue + "px top",
      end: "bottom bottom",
      markers: false,
      scrub: 1,
    },
    onUpdate: render,
  });

  function countImages() {
    loadedImages = loadedImages + 1;
    if (loadedImages === frameCount) {
      loadingText.style.display = "none";
      animationContainer.style.display = "block";
      buttons.style.display = "flex";
      render();
      ScrollTrigger.refresh();
    }
  }

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[frames.frame], 0, 0);
  }

}

@Component({
  selector: "app-ultra-thin-veneers",
  templateUrl: "./ultra-thin-veneers.component.html",
  styleUrls: ["./ultra-thin-veneers.component.scss"],
})
export class UltraThinVeneersComponent implements OnInit {
  @ViewChild("LoadingText") loadingText: ElementRef;
  @ViewChild("SuggestionButton") suggestionButton: ElementRef;
  @ViewChild("SuggestionButtonUp") suggestionButtonUp: ElementRef;
  @ViewChild("MobileSuggestion") MobileSuggestion: ElementRef;

  currentFrame = 0;
  framePositions = [585, 1385, 1885, 2385, 3085, 4485, 6885];
  firstFramePosition = 217;
  lastFramePosition = 7185;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    startAnimation();
    this.suggestionButton.nativeElement.style.display = "none";
    this.suggestionButtonUp.nativeElement.style.display = "none";
    this.MobileSuggestion.nativeElement.style.display = "none";
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {

    if(window.scrollY >= this.firstFramePosition && window.scrollY <= this.lastFramePosition && window.innerWidth < 600 && window.innerWidth < window.innerHeight) {
      this.MobileSuggestion.nativeElement.style.display = "flex";
    }
    else {
      this.MobileSuggestion.nativeElement.style.display = "none";
    }

    if (window.scrollY >= this.firstFramePosition && window.scrollY < this.framePositions[this.framePositions.length - 1]) {
      this.suggestionButton.nativeElement.style.display = "block";
    } else {
      this.suggestionButton.nativeElement.style.display = "none";
    }

    if(window.scrollY > this.firstFramePosition + 100 &&window.scrollY <= this.lastFramePosition) {
      this.suggestionButtonUp.nativeElement.style.display = "block";
    }
    else {
      this.suggestionButtonUp.nativeElement.style.display = "none";
    }
  }

  setCurrentFrame() {
    for (var i = 0; i < this.framePositions.length - 1; i++) {
      if (window.scrollY < this.framePositions[0]) {
        this.currentFrame = 0;
        break;
      }
      if (
        window.scrollY >= this.framePositions[i] &&
        window.scrollY < this.framePositions[i + 1]
      ) {
        this.currentFrame = i + 1;
        break;
      }
      if (
        window.scrollY >= this.framePositions[this.framePositions.length - 1]
      ) {
        this.currentFrame = this.framePositions.length - 1;
        break;
      }
    }
  }

  seeGallery() {
    this.router.navigate(["/", "BeforeAndAfter"]);
  }
  
  onNextClick() {
    this.setCurrentFrame();
    window.scrollTo({
      top: this.framePositions[this.currentFrame],
      left: 0,
      behavior: "smooth",
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
