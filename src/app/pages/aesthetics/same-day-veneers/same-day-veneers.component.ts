import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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

function addPatterns() {
  setTimeout(() => {  
  const pContainer = document.getElementById("patternContainer");
  pContainer.innerHTML = '';
  const tContainer = document.getElementById("timeContainer");
  const tContainerRect = tContainer.getBoundingClientRect();
  var times = 1;
  if(tContainerRect) {
    times = tContainerRect.height / 84;
  }


  for(var j = 0; j< times-1;j++) {
    const c = document.createElement("div");
    c.style.paddingLeft = "8vw";
    c.style.marginBottom = "6px";
    const i = document.createElement("img");
    i.style.height = "78px";
    i.src = "../../../../assets/aesthetics/SameDay/desk/pattern.svg";
    c.appendChild(i);
  
    pContainer.appendChild(c);
  }
}, 1000);


}
function addPatternsMobile() {
  

  setTimeout(() => {  
    const pContainer = document.getElementById("patternContainerMobile");
    pContainer.innerHTML = '';
  const tContainer = document.getElementById("timeContainerMobile");
  const tContainerRect = tContainer.getBoundingClientRect();
  console.log(tContainerRect);
  var times = 1;
  if(tContainerRect) {
    times = tContainerRect.height / 43;

  }



  for(var j = 0; j< times-1;j++) {
    const c = document.createElement("div");
    c.style.paddingLeft = "4vw";
    c.style.marginBottom = "3px";
    const i = document.createElement("img");
    i.style.height = "40px";
    i.src = "../../../../assets/aesthetics/SameDay/desk/pattern.svg";
    c.appendChild(i);
  
    pContainer.appendChild(c);
  }
  }, 1000);


}




@Component({
  selector: 'app-same-day-veneers',
  templateUrl: './same-day-veneers.component.html',
  styleUrls: ['./same-day-veneers.component.scss']
})
export class SameDayVeneersComponent implements OnInit {

  constructor(private router: Router, private title: Title, private meta: Meta) { 
    this.title.setTitle("Same Day Dental Veneers - Leaders in Gold Coast");
    this.meta.addTags([{
      name: 'description',
      content: `Get your dream smile in just a day, no more waiting, exclusive to Proud Smile. Completely digital, beautiful personalised results, book your day today.`
    }, { name: 'keywords', content: 'same day veneers, porcelain veneers same day, same day porcelain veneers' }]);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //startAnimation();
    //resize();
    if (window.innerWidth > 1200) {
      addPatterns();
    }
    else {

      addPatternsMobile();
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    
    if (window.innerWidth > 1200) {
      addPatterns();
    }
    else {

      addPatternsMobile();
    }
  }


  goToLink(url: string) {
    window.open(url, "_blank");
  }
  
  seeGallery() {
    this.router.navigate(["/", "BeforeAndAfter"]);
  }
}
