import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

function resize() {
  const canvas: any = document.getElementById("hero-lightpass-watch");
  const canvasContainer: any = document.getElementById("WatchCanvasContainer");

  if(canvas && canvasContainer) {
    canvasContainer.style.width = canvas.getBoundingClientRect().width + "px";
    canvasContainer.style.height = canvas.getBoundingClientRect().height + "px";
  }
}

window.onresize = resize;

function startAnimation() {
  const canvas: any = document.getElementById("hero-lightpass-watch");
  const context = canvas.getContext("2d");
  const animationContainer: any = document.getElementById(
    "WatchAnimationContainer"
  );
  document.body.style.overflow = "hidden";

  let topValue = 129;

  if (window.innerWidth < 1200) {
    topValue = 80;
  }

  let framesPath = "video";
  let startValue = "bottom bottom";
  let endValue = "+=4000"


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
      id: "ScrollTriggerWatch",
      trigger: "#hero-lightpass-watch",
      start: startValue,
      end: endValue,
      markers: false,
      scrub: 1,
      pin: "#WatchFirstSection"
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
