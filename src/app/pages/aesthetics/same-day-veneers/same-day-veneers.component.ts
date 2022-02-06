import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


function resize() {
  const canvas: any = document.getElementById("hero-lightpass-same-day");
  const canvasFramer: any = document.getElementsByClassName("canvas-framer")[0];

  if(canvas && canvasFramer) {
    canvasFramer.style.width = canvas.getBoundingClientRect().width + 2 + "px";
    canvasFramer.style.height = canvas.getBoundingClientRect().height + 2 + "px";
  }
}

window.onresize = resize;

function startAnimation() {
  const canvas: any = document.getElementById("hero-lightpass-same-day");
  const context = canvas.getContext("2d");
  const animationContainer: any = document.getElementById(
    "SameDayAnimationContainer"
  );
  document.body.style.overflow = "hidden";

  let topValue = 217;

  if (window.innerWidth < 1200) {
    topValue = 144;
  }

  let framesPath = "video";
  if(window.innerWidth < 1200) {
    framesPath = "video mobile";
    canvas.width = 492;
    canvas.height = 399;
  }
  else
  {
    canvas.width = 984;
    canvas.height = 798;
  }

  const frameCount = 182;
  const currentFrame = (index) =>
    `../../../../assets/aesthetics/SameDay/${framesPath}/SameDay ${(
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
      id: "ScrollTriggerSameDay",
      trigger: "#SameDayAnimationContainer",
      onEnter: () => {
        canvas.classList.add("canvas-in-viewport");
      },
      onEnterBack: () => {
        canvas.classList.add("canvas-in-viewport");
        canvas.parentElement.classList.remove("canvas-container-end");
      },
      onLeave: () => {
        canvas.classList.remove("canvas-in-viewport");
        canvas.parentElement.classList.add("canvas-container-end");
      },
      onLeaveBack: () => {
        canvas.classList.remove("canvas-in-viewport");
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
      animationContainer.style.display = "block";
      render();
      ScrollTrigger.refresh();
    }
  }

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[frames.frame], 0, 0);

    resize();
  }

}


@Component({
  selector: 'app-same-day-veneers',
  templateUrl: './same-day-veneers.component.html',
  styleUrls: ['./same-day-veneers.component.scss']
})
export class SameDayVeneersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    startAnimation();
    resize();
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
  
  seeGallery() {
    this.router.navigate(["/", "BeforeAndAfter"]);
  }
}
