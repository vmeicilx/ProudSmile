import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-contact-page",
  templateUrl: "./contact-page.component.html",
  styleUrls: ["./contact-page.component.scss"]
})
export class ContactPageComponent implements OnInit {
  @ViewChild("name") name: ElementRef;
  @ViewChild("email") email: ElementRef;
  @ViewChild("company") company: ElementRef;
  @ViewChild("phone") phone: ElementRef;
  @ViewChild("message") message: ElementRef;

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

  onSendMessage() {
    var name = this.name.nativeElement.value;
    var email = this.email.nativeElement.value;
    var company = this.company.nativeElement.value;
    var phone = this.phone.nativeElement.value;
    var message = this.message.nativeElement.value;

    if (this.name.nativeElement.value === "") {
      alert("Name is a required field.");
      return;
    }
    if (this.email.nativeElement.value === "") {
      alert("Email is a required field.");
      return;
    }
    if (this.phone.nativeElement.value === "") {
      alert("Phone is a required field.");
      return;
    }

    alert("Message sent successfully!");
  }

  onContactPage() {
    this.router.navigate(["/", "contact-page-component"]);
    window.scrollTo(0, 0);
  }
}
