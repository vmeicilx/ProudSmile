import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  ViewChild,
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

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {

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
  }

  ngOnInit() {
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
