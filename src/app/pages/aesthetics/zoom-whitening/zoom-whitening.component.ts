import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


// function resize() {

//   if(window.innerWidth > 1200) {
//     const canvas: any = document.getElementById("hero-lightpass-zoom");
//     const canvasFramer: any = document.getElementsByClassName("canvas-framer")[0];
//     //const mobileSuggestion = document.getElementById("MobileSuggestion");

//     if(canvas && canvasFramer) {
//       canvasFramer.style.width = canvas.getBoundingClientRect().width + 2 + "px";
//       canvasFramer.style.height = canvas.getBoundingClientRect().height + 2 + "px";
    
//       if (window.innerWidth < 600 && window.innerWidth < window.innerHeight) {
//         //mobileSuggestion.style.display = "flex";
//       } else {
//         //mobileSuggestion.style.display = "none";
//       }
//     }
//   }
//   else {
//     const canvas: any = document.getElementById("hero-lightpass-Zoom");
//     const canvasContainer: any = document.getElementById("ZoomCanvasContainer");

//     if (canvas && canvasContainer) {
//       canvasContainer.style.width = canvas.getBoundingClientRect().width + "px";
//       canvasContainer.style.height = canvas.getBoundingClientRect().height + "px";
//     }
//   }
// }

//window.onresize = resize;

function startAnimation() {
  const canvas: any = document.getElementById("hero-lightpass-zoom");
  const context = canvas.getContext("2d");
  const loadingText: any = document.getElementById("LoadingTextZoom");
  const animationContainer: any = document.getElementById(
    "ZoomAnimationContainer"
  );
  const buttons: any = document.getElementById("ZoomBottomButtons");
  const canvasFramer: any = document.getElementsByClassName("canvas-framer")[0];
  document.body.style.overflow = "hidden";

  let topValue = 217;

  if (window.innerWidth < 1200) {
    topValue = 144;
  }

  let framesPath = "Zoom";
  if(window.innerWidth < 1200) {
    framesPath = "Zoom mobile";
    canvas.width = 681;
    canvas.height = 350;
  }
  else
  {
    canvas.width = 1362;
    canvas.height = 700;
  }

  canvasFramer.style.width = canvas.getBoundingClientRect().width + 2 + "px";
  canvasFramer.style.height = canvas.getBoundingClientRect().height + 2 + "px";



  const frameCount = 410;
  const currentFrame = (index) =>
    `../../../../assets/aesthetics/${framesPath}/Zoom ${(
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
      id: "ScrollTriggerZoom",
      trigger: "#ZoomAnimationContainer",
      onEnter: () => {
        canvas.classList.add("canvas-in-viewport");
        document.getElementsByClassName("canvas-framer")[0].classList.add("canvas-in-viewport");
      },
      onEnterBack: () => {
        canvas.classList.add("canvas-in-viewport");
        document.getElementsByClassName("canvas-framer")[0].classList.add("canvas-in-viewport");
        canvas.parentElement.classList.remove("canvas-container-end");
      },
      onLeave: () => {
        canvas.classList.remove("canvas-in-viewport");
        document.getElementsByClassName("canvas-framer")[0].classList.remove("canvas-in-viewport");
        canvas.parentElement.classList.add("canvas-container-end");
      },
      onLeaveBack: () => {
        canvas.classList.remove("canvas-in-viewport");
        document.getElementsByClassName("canvas-framer")[0].classList.remove("canvas-in-viewport");
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

    //resize();
  }

}

function startAnimationMobile() {
  const canvas: any = document.getElementById("hero-lightpass-Zoom");
  const context = canvas.getContext("2d");
  const animationContainer: any = document.getElementById(
    "ZoomAnimationContainerMobile"
  );
  document.body.style.overflow = "hidden";

  let startValue = "top 146px";
  let endValue = "+=2000"

  canvas.width = 600;
  canvas.height = 308;

  const frameCount = 23;

  const currentFrame = (index) =>
    `../../../../assets/aesthetics/Zoom images mobile/Zoom start/Zoom_Mobile ${(
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
      id: "ScrollTriggerZoom",
      trigger: "#hero-lightpass-Zoom",
      start: startValue,
      end: endValue,
      markers: false,
      scrub: 1,
      pin: "#ZoomFirstSection"
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
    //resize()
  }

}


@Component({
  selector: 'app-zoom-whitening',
  templateUrl: './zoom-whitening.component.html',
  styleUrls: ['./zoom-whitening.component.scss']
})
export class ZoomWhiteningComponent implements OnInit {


  @ViewChild("SuggestionButton") suggestionButton: ElementRef;
  @ViewChild("SuggestionButtonUp") suggestionButtonUp: ElementRef;
  

  currentFrame = 0;
  framePositions = [1300, 2000, 2900, 4200, 5200, 7000, 10700];
  firstFramePosition = 217;
  lastFramePosition = 10700;

  
  @ViewChild("zoomVideo") zoomVideo: ElementRef;

  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.title.setTitle("Zoom Teeth Whitening on the Gold Coast | Proud Smile Dental");
    this.meta.addTags([{
      name: 'description',
      content: `The most trusted teeth whitening system in the world is available at Proud Smile. Great value at $495, sit back and watch Netflix while your teeth get whiter.`
    }, { name: 'keywords', content: 'professional teeth whitening, teeth whitening gold coast, zoom teeth whitening gold coast' }]);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {

    // if(window.innerWidth > 1200) {
    // startAnimation();
    // this.suggestionButton.nativeElement.style.display = "none";
    // this.suggestionButtonUp.nativeElement.style.display = "none";
    // //this.MobileSuggestion.nativeElement.style.display = "none";
    // resize();
    // }
    // else {
      
    //   startAnimationMobile();
    //   resize();
    //   // this.zoomVideo.nativeElement.muted = true;
    //   // this.zoomVideo.nativeElement.style.display = "block";
    //   // this.zoomVideo.nativeElement.play();
    // }



  }


  seeUltraThin() {
    this.router.navigate(["/", "UltraThinVeneers"]);
    window.scrollTo(0, 0);
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {
  }



  setCurrentFrame() {
    for(var i = 0; i < this.framePositions.length-1; i++)
    {
      if(window.scrollY < this.framePositions[0]) {
        this.currentFrame = 0;
        break;
      }
      if(window.scrollY>=this.framePositions[i] && window.scrollY < this.framePositions[i+1]) {
        this.currentFrame = i+1;
        break;
      }
      if(window.scrollY >= this.framePositions[this.framePositions.length-1]) {
        this.currentFrame = this.framePositions.length-1;
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
