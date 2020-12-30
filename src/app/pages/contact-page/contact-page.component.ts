import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-contact-page",
  templateUrl: "./contact-page.component.html",
  styleUrls: ["./contact-page.component.scss"]
})
export class ContactPageComponent implements OnInit {
  constructor(private router: Router) {}

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

  ngOnInit(): void {}

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  onContactPage() {
    this.router.navigate(["/", "contact-page-component"]);
    window.scrollTo(0, 0);
  }
}
