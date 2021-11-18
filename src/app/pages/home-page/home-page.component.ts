import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  ViewChild,
  HostListener
} from "@angular/core";

import { Router } from "@angular/router";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  private elRef: ElementRef;
  private renderer: Renderer2;

  @ViewChild("relaxVideo") relaxVideo: ElementRef;
  @ViewChild("vennerShortText") vennerShortText: ElementRef;
  @ViewChild("vennerShortTextMobile") vennerShortTextMobile: ElementRef;

  imageObject: Array<object> = [
    {
      image: "../../../assets/homePage/instaFeed/1.png",
      thumbImage: "../../../assets/homePage/instaFeed/1.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/2.png",
      thumbImage: "../../../assets/homePage/instaFeed/2.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/3.png",
      thumbImage: "../../../assets/homePage/instaFeed/3.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/4.png",
      thumbImage: "../../../assets/homePage/instaFeed/4.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/5.png",
      thumbImage: "../../../assets/homePage/instaFeed/5.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/6.png",
      thumbImage: "../../../assets/homePage/instaFeed/6.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/7.png",
      thumbImage: "../../../assets/homePage/instaFeed/7.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/8.png",
      thumbImage: "../../../assets/homePage/instaFeed/8.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/9.png",
      thumbImage: "../../../assets/homePage/instaFeed/9.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/10.png",
      thumbImage: "../../../assets/homePage/instaFeed/10.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/11.png",
      thumbImage: "../../../assets/homePage/instaFeed/11.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/12.png",
      thumbImage: "../../../assets/homePage/instaFeed/12.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/13.png",
      thumbImage: "../../../assets/homePage/instaFeed/13.png"
    }
  ];

  constructor(el: ElementRef, renderer: Renderer2, private router: Router) {
    this.elRef = el;
    this.renderer = renderer;
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.relaxVideo.nativeElement.muted = true;
    this.relaxVideo.nativeElement.style.display = "block";
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {
    if (this.inTheViewport(this.relaxVideo.nativeElement)) {
      if (this.relaxVideo.nativeElement.paused) {
        this.relaxVideo.nativeElement.play();
      }
    } else {
      if (!this.relaxVideo.nativeElement.paused) {
        this.relaxVideo.nativeElement.pause();
      }
    }
  }
  showTextPre($event) {

    this.vennerShortText.nativeElement.style.position = "absolute";
    this.vennerShortText.nativeElement.style.bottom = "unset";
    this.vennerShortText.nativeElement.style.top = "0px";

    this.vennerShortTextMobile.nativeElement.style.position = "relative";
  }


  showText($event) {

    this.vennerShortText.nativeElement.style.position = "fixed";
    this.vennerShortText.nativeElement.style.bottom = "unset";
    this.vennerShortText.nativeElement.style.top = "0px";

    this.vennerShortTextMobile.nativeElement.style.position = "fixed";
    this.vennerShortTextMobile.nativeElement.style.bottom = $event.height;
  }

  hideText($event) {

    this.vennerShortText.nativeElement.style.position = "absolute";
    this.vennerShortText.nativeElement.style.top = "unset";
    this.vennerShortText.nativeElement.style.bottom = "0px";
    
    this.vennerShortTextMobile.nativeElement.style.position = "relative";
  }

  inTheViewport(elem): boolean {
    var bounding = elem.getBoundingClientRect();
    if (
      bounding.top >= -elem.offsetHeight &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) +
          elem.offsetHeight
    ) {
      return true;
    } else {
      return false;
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
