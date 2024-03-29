import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { NavigationEnd, Router } from "@angular/router";
import { EmailData } from "src/EmailData";
import { emailService } from "src/emailService";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  isContactPage: boolean = false;

  @ViewChild("item1") it1: ElementRef;
  @ViewChild("item2") it2: ElementRef;
  @ViewChild("item3") it3: ElementRef;
  @ViewChild("item4") it4: ElementRef;
  @ViewChild("Newsletter") newsletter: ElementRef;
  @ViewChild("subscribeEmail") subscribeEmail: ElementRef;
  
  emailData : EmailData;

  matcher = new MyErrorStateMatcher();
  constructor(private router: Router, private emailServ: emailService) {
    router.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd) {
        window.scrollTo(0, 0);

        this.it1.nativeElement.classList.remove("display-none");
        this.it2.nativeElement.classList.remove("display-none");
        this.it3.nativeElement.classList.remove("display-none");
        this.it4.nativeElement.classList.remove("display-none");
        if (val.url === "/ContactPage") {
          this.it1.nativeElement.classList.add("display-none");
          this.it2.nativeElement.classList.add("display-none");
          this.it3.nativeElement.classList.add("display-none");
          this.it4.nativeElement.classList.add("display-none");
        }
      }
    });
  }

  ngOnInit(): void {}

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  onContactPage() {
    this.router.navigate(["/", "ContactPage", true]);
    window.scrollTo(0, 0);
  }

  onNewsletterClick() {
    this.newsletter.nativeElement.style.visibility = "visible";
    document.documentElement.style.overflowY = "hidden";
  }

  onNewsletterClose() {
    this.newsletter.nativeElement.style.visibility = "hidden";
    document.documentElement.style.overflowY = "scroll";
  }

  onSubscribeButtonClikc() {
    var email = this.subscribeEmail.nativeElement.value;

    if (email === "") {
      alert("Email is a required field.");
      return;
    }

    console.log(email);

    this.emailServ.subscribeEmail(email).subscribe();

    alert("Successfully subscribed " + email + "!");
  }
}
