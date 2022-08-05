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
