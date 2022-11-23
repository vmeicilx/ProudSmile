import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

function resize2() {
  const canvas: any = document.getElementById("hero-proudsmile2");
  const canvasContainer: any = document.getElementById("ProudSmileCanvasContainer2");

  if(canvas && canvasContainer) {
    canvasContainer.style.width = canvas.getBoundingClientRect().width + "px";
    canvasContainer.style.height = canvas.getBoundingClientRect().height + "px";
  }
}

window.onresize = resize2;

function startAnimation2() {
  const canvas: any = document.getElementById("hero-proudsmile2");
  const context = canvas.getContext("2d");
  document.body.style.overflow = "hidden";

  let startValue = "top 129px";
  let endValue = "+=5000";

  if(window.innerWidth < 1200) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth / (1364 / 700);
    startValue = "top 80px";
  }
  else
  {
    canvas.width = 1364;
    canvas.height = 700;
  }


  const frameCount = 200;
  const currentFrame = (index) =>
    `../../../../assets/homePage/short/Porcelain Veneers Short ${(
      index + 1
    )
      .toString()
      .padStart(3, "0")}.jpg`;

  const images = [];
  const frames = {
    frame: 0,
  };

  let loadedImages = 0;

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    img.onload = countImages;
    
    if(window.innerWidth < 1200) {
      img.width = window.innerWidth;
      img.height = window.innerWidth / (1364 / 700);
    }
    images.push(img);
  }

  gsap.to(frames, {
    frame: frameCount - 1,
    snap: "frame",
    scrollTrigger: {
      id: "ScrollTriggerProudSmile2",
      trigger: "#ProudSmileParent2",
      start: startValue,
      end: endValue,
      markers: false,
      scrub: 1,
      pin: true
    },
    onUpdate: render2,
  });

  function countImages() {
    loadedImages = loadedImages + 1;
    if (loadedImages === frameCount) {
      render2();
      ScrollTrigger.refresh();
    }
  }

  function render2() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[frames.frame], 0, 0, images[frames.frame].width, images[frames.frame].height, 0, 0, canvas.width, canvas.height);
    resize2();
    const canvasParent: any = document.getElementById("ProudSmileParent2");

    if(canvasParent) {
      if(window.innerWidth < 1200) {
        canvasParent.style.top = "80px";
      }
      else
      {
        canvasParent.style.top = "129px";
      }
    }
  }
}


@Component({
  selector: "app-proud-smile-experience",
  templateUrl: "./proud-smile-experience.component.html",
  styleUrls: ["./proud-smile-experience.component.scss"]
})
export class ProudSmileExperienceComponent implements OnInit {
  @ViewChild("sound1") sound1: ElementRef;
  @ViewChild("soundButton1") soundButton1: ElementRef;
  @ViewChild("sound2") sound2: ElementRef;
  @ViewChild("soundButton2") soundButton2: ElementRef;
  
  @ViewChild("vennerShortText") vennerShortText: ElementRef;

  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.title.setTitle("The Proud Smile Experience: Dentistry Reinvented");
    this.meta.addTags([{
      name: 'description',
      content: `For decades dentistry has been associated with pain, anxiety, bad smells, cold, too expensive and judgmental. We decided it was time to change.`
    }]);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    
    if (window.innerWidth > 1200) {

    setTimeout(() => {
      startAnimation2();
      resize2();
    }, 100);
  }

  }

  playSound1() {
    this.soundButton1.nativeElement.style.animationPlayState = "paused";
    let sound1 = this.sound1.nativeElement;
    sound1.play();
  }
  playSound2() {
    this.soundButton2.nativeElement.style.animationPlayState = "paused";
    let sound2 = this.sound2.nativeElement;
    sound2.play();
  }

  seeAllFinancial() {
    this.router.navigate(["/", "payment-page-component"]);
  }
  seeAllAesthetic() {
    this.router.navigate(["/", "PorcelainVeneers"]);
    window.scrollTo(0, 0);
  }

  seeUltraThin() {
    this.router.navigate(["/", "UltraThinVeneers"]);
  }

  seeFacespaPage() {
    window.open("https://www.facespa.com.au", "_blank");
  }

  onWhoWeAre() {
    this.router.navigate(["/", "who-we-are-component"]);
  }

  showTextPre() {

    this.vennerShortText.nativeElement.style.position = "absolute";
    this.vennerShortText.nativeElement.style.bottom = "unset";
    this.vennerShortText.nativeElement.style.top = "0px";
  }


  showText() {

    this.vennerShortText.nativeElement.style.position = "fixed";
    this.vennerShortText.nativeElement.style.bottom = "unset";
    this.vennerShortText.nativeElement.style.top = "0px";
  }

  hideText() {

    this.vennerShortText.nativeElement.style.position = "absolute";
    this.vennerShortText.nativeElement.style.top = "unset";
    this.vennerShortText.nativeElement.style.bottom = "0px";
  }
  
  goToLink(url: string) {
    window.open(url, "_blank");
  }
  goToLinkWithotNewTab(url: string) {
    window.open(url, "_self");
  }
}
