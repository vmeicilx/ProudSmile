import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";

function resize() {
  const canvas: any = document.getElementById("hero-lightpass-ultra");
  const canvasFramer: any = document.getElementsByClassName("canvas-framer")[0];
  const mobileSuggestion = document.getElementById("MobileSuggestion");

  if(canvas && canvasFramer && mobileSuggestion) {
    canvasFramer.style.width = canvas.getBoundingClientRect().width + "px";
    canvasFramer.style.height = canvas.getBoundingClientRect().height + 2 + "px";
  
    if(window.scrollY >= 217 && window.scrollY <= 8000 && window.innerWidth < 600 && window.innerWidth < window.innerHeight) {
      mobileSuggestion.style.display = "flex";
    }
    else {
      mobileSuggestion.style.display = "none";
    }
  }
}

window.onresize = resize;

function startAnimation() {
  const loadingProgress: any = document.getElementById("LoadingProgressUltra");
  const canvas: any = document.getElementById("hero-lightpass-ultra");
  const context = canvas.getContext("2d");
  const loadingText: any = document.getElementById("LoadingTextUltraThin");
  const animationContainer: any = document.getElementById(
    "UltraCanvasContainer"
  );
  const buttons: any = document.getElementById("UltraThinBottomButtons");
  const canvasFramer: any = document.getElementsByClassName("canvas-framer")[0];

  document.body.style.overflow = "hidden";

  let startValue = "top top";
  let endValue = "+=8000"
  let framesPath = "UltraThinVeneers/Ultra Thin Veneers";
  if(window.innerWidth < 1200) {
    framesPath = "UltraThinVeneers mobile/Ultra Thin Veneers";
    canvas.width = 682;
    canvas.height = 350;
  }
  else
  {
    canvas.width = 1364;
    canvas.height = 700;
  }

  canvasFramer.style.width = canvas.getBoundingClientRect().width + "px";
  canvasFramer.style.height = canvas.getBoundingClientRect().height + "px";

  const frameCount = 460;
  const currentFrame = (index) =>
    `../../../../assets/aesthetics/${framesPath} ${(
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



    // const testButton = document.getElementById("TestButton");

  // var tl = gsap.timeline({
    
  //   scrollTrigger: {
  //     trigger: '#UltraThinAnimationContainer',
  //     start: 'top+=1000 top+=700',
  //     end: '+=500',
  //     scrub: true,
  //     markers: true
  //   }
    
  // })
  
  // tl
  // .to(testButton, { opacity: 1})  
  // .to(testButton, { opacity: 0}, 1);

  function countImages() {
    loadedImages = loadedImages + 1;
    loadingProgress.innerHTML = loadedImages + `/` + frameCount + " frames loaded...";
    if (loadedImages === frameCount) {
      loadingText.style.display = "none";
      animationContainer.style.display = "block";
      buttons.style.display = "flex";

      gsap.to(frames, {
        frame: frameCount - 1,
        snap: "frame",
        scrollTrigger: {
          id: "ScrollTriggerUltra",
          trigger: "#UltraCanvasContainer",
          start: startValue,
          end: endValue,
          markers: true,
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
  framePositions = [700, 1200, 2300, 2900, 3500, 5000, 8100];
  firstFramePosition = 217;
  lastFramePosition = 8200;

  framesLoadedText = "";

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.framesLoadedText = "0/460";}

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
