import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  ViewChild,
  HostListener,
} from "@angular/core";

import { Router } from "@angular/router";
import { Title, Meta } from '@angular/platform-browser';

function resize() {
  const canvas: any = document.getElementById("hero-proudsmile");
  const canvasContainer: any = document.getElementById("ProudSmileCanvasContainer");

  if(canvas && canvasContainer) {
    canvasContainer.style.width = canvas.getBoundingClientRect().width + "px";
    canvasContainer.style.height = canvas.getBoundingClientRect().height + "px";
  }
}

window.onresize = resize;

function startAnimation() {
  const canvas: any = document.getElementById("hero-proudsmile");
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
      id: "ScrollTriggerProudSmile",
      trigger: "#ProudSmileParent",
      start: startValue,
      end: endValue,
      markers: false,
      scrub: 1,
      pin: true
    },
    onUpdate: render,
  });

  function countImages() {
    loadedImages = loadedImages + 1;
    if (loadedImages === frameCount) {
      render();
      ScrollTrigger.refresh();
    }
  }

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[frames.frame], 0, 0, images[frames.frame].width, images[frames.frame].height, 0, 0, canvas.width, canvas.height);
    resize();
    const canvasParent: any = document.getElementById("ProudSmileParent");
    
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
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  private elRef: ElementRef;
  private renderer: Renderer2;

  @ViewChild("relaxVideo") relaxVideo: ElementRef;
  @ViewChild("vennerShortText") vennerShortText: ElementRef;
  @ViewChild("vennerShortTextMobile") vennerShortTextMobile: ElementRef;

  imageObject: Array<object> = [
    {
      image: "../../../assets/homePage/instaFeed/1.jpg",
      thumbImage: "../../../assets/homePage/instaFeed/1.jpg"
    },
    {
      image: "../../../assets/homePage/instaFeed/2.jpg",
      thumbImage: "../../../assets/homePage/instaFeed/2.jpg"
    },
    {
      image: "../../../assets/homePage/instaFeed/3.jpg",
      thumbImage: "../../../assets/homePage/instaFeed/3.jpg"
    },
    {
      image: "../../../assets/homePage/instaFeed/4.jpg",
      thumbImage: "../../../assets/homePage/instaFeed/4.jpg"
    },
    {
      image: "../../../assets/homePage/instaFeed/5.jpg",
      thumbImage: "../../../assets/homePage/instaFeed/5.jpg"
    },
    {
      image: "../../../assets/homePage/instaFeed/6.jpg",
      thumbImage: "../../../assets/homePage/instaFeed/6.jpg"
    },
    {
      image: "../../../assets/homePage/instaFeed/7.jpg",
      thumbImage: "../../../assets/homePage/instaFeed/7.jpg"
    },
    {
      image: "../../../assets/homePage/instaFeed/8.jpg",
      thumbImage: "../../../assets/homePage/instaFeed/8.jpg"
    },
    {
      image: "../../../assets/homePage/instaFeed/9.jpg",
      thumbImage: "../../../assets/homePage/instaFeed/9.jpg"
    },
    {
      image: "../../../assets/homePage/instaFeed/10.jpg",
      thumbImage: "../../../assets/homePage/instaFeed/10.jpg"
    },
    {
      image: "../../../assets/homePage/instaFeed/11.jpg",
      thumbImage: "../../../assets/homePage/instaFeed/11.jpg"
    },
    {
      image: "../../../assets/homePage/instaFeed/12.jpg",
      thumbImage: "../../../assets/homePage/instaFeed/12.jpg"
    },
    {
      image: "../../../assets/homePage/instaFeed/13.jpg",
      thumbImage: "../../../assets/homePage/instaFeed/13.jpg"
    },
    {
      image: "../../../assets/homePage/instaFeed/14.jpg",
      thumbImage: "../../../assets/homePage/instaFeed/14.jpg"
    },
    {
      image: "../../../assets/homePage/instaFeed/15.jpg",
      thumbImage: "../../../assets/homePage/instaFeed/15.jpg"
    },
    {
      image: "../../../assets/homePage/instaFeed/16.jpg",
      thumbImage: "../../../assets/homePage/instaFeed/16.jpg"
    }
  ];

  public href: string = "";

  constructor(el: ElementRef, renderer: Renderer2, private router: Router, private title: Title, private meta: Meta) {
    this.title.setTitle("Proud Smile Gold Coast: A dental practice but not as you know it");
    this.meta.addTags([{
      name: 'description',
      content: `The dentists you'll actually want to visit. Modern general dentistry and bespoke aesthetic treatments on the Gold Coast - Bundall, Pacific Fair.`
    }, { name: 'keywords', content: 'dentist gold coast, dental clinic gold coast, dental care center' }]);
    this.elRef = el;
    this.renderer = renderer;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.relaxVideo.nativeElement.muted = true;
    this.relaxVideo.nativeElement.style.display = "block";

    if (window.innerWidth <= 1200) {
      this.relaxVideo.nativeElement.autoplay = true;
    }

    
    if (window.innerWidth > 1200) {

    setTimeout(() => {
      startAnimation();
      resize();
    }, 100);
  }

  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {
    let playPromise;
    if (ScrollTrigger.isInViewport(this.relaxVideo.nativeElement)) {
      playPromise = this.relaxVideo.nativeElement.play();
    }
    else {
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          this.relaxVideo.nativeElement.pause();
        })
          .catch(error => {
          });
      }
    }
  }
  showTextPre($event) {
    if (this.vennerShortText) {
      this.vennerShortText.nativeElement.style.position = "absolute";
      this.vennerShortText.nativeElement.style.bottom = "unset";
      this.vennerShortText.nativeElement.style.top = "0px";
    } else if (this.vennerShortTextMobile) {
      this.vennerShortTextMobile.nativeElement.style.position = "relative";
      this.vennerShortTextMobile.nativeElement.style.bottom = "unset";
    }
  }

  showText($event) {
    if (this.vennerShortText) {
      this.vennerShortText.nativeElement.style.position = "fixed";
      this.vennerShortText.nativeElement.style.bottom = "unset";
      this.vennerShortText.nativeElement.style.top = "0px";
    } else if (this.vennerShortTextMobile) {
      this.vennerShortTextMobile.nativeElement.style.position = "fixed";
      this.vennerShortTextMobile.nativeElement.style.bottom = $event.height;
    }
  }

  hideText($event) {
    if (this.vennerShortText) {
      this.vennerShortText.nativeElement.style.position = "absolute";
      this.vennerShortText.nativeElement.style.top = "unset";
      this.vennerShortText.nativeElement.style.bottom = "0px";
    } else if (this.vennerShortTextMobile) {
      this.vennerShortTextMobile.nativeElement.style.position = "relative";
      this.vennerShortTextMobile.nativeElement.style.bottom = "unset";
    }
  }

  seeAllHealth() {
    this.router.navigate(["/", "Extractions"]);
    window.scrollTo(0, 0);
  }

  seeAllAesthetic() {
    this.router.navigate(["/", "PorcelainVeneers"]);
    window.scrollTo(0, 0);
  }
  seeOurClinic() {
    this.router.navigate(["/", "dental-clinic-component"]);
    window.scrollTo(0, 0);
  }
  seeProudSmileExperience() {
    this.router.navigate(["/", "proud-smile-experience-component"]);
    window.scrollTo(0, 0);
  }

  seeAllFinancial() {
    this.router.navigate(["/", "payment-page-component"]);
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  onInternalLink(item: string) {
    this.router.navigate(["/", item]);
    window.scrollTo(0, 0);
  }

  onContactPage() {
    this.router.navigate(["/contact-page-component/true"]);
    window.scrollTo(0, 0);
  }
}
