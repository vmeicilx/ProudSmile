import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

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

  @ViewChild("nameSmall") nameSmall: ElementRef;
  @ViewChild("emailSmall") emailSmall: ElementRef;
  @ViewChild("companySmall") companySmall: ElementRef;
  @ViewChild("phoneSmall") phoneSmall: ElementRef;
  @ViewChild("messageSmall") messageSmall: ElementRef;

  public scrollToContactForm: string;

  constructor(private router: Router, private _activatedRoute: ActivatedRoute) {
  }

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

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(parameter => {
      this.scrollToContactForm = parameter.parameter
    })
  }

  ngAfterViewInit(): void {
    if(this.scrollToContactForm)
    {
      this.scrollToContactFormAction()
    }
  }

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
  onSendMessageSmall() {
    var name = this.nameSmall.nativeElement.value;
    var email = this.emailSmall.nativeElement.value;
    var company = this.companySmall.nativeElement.value;
    var phone = this.phoneSmall.nativeElement.value;
    var message = this.messageSmall.nativeElement.value;

    if (name === "") {
      alert("Name is a required field.");
      return;
    }
    if (email === "") {
      alert("Email is a required field.");
      return;
    }
    if (phone === "") {
      alert("Phone is a required field.");
      return;
    }

    alert("Message sent successfully!");
  }

  onContactPage() {
    this.router.navigate(["/", "contact-page-component"]);
    window.scrollTo(0, 0);
  }

  scrollToContactFormAction() {
    setTimeout(() => {
      document.getElementById("contact-form").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }, 500)
  }
}
