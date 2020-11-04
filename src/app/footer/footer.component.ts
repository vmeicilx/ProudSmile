import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { Router } from "@angular/router";

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
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onFacebookClick() {
    this.router.navigate(["/why-proud-smile-component"]);
  }
  onTwitterClick() {
    this.router.navigate(["/why-proud-smile-component"]);
  }
  onInstagramClick() {
    this.router.navigate(["/why-proud-smile-component"]);
  }

  onNewsletterClick() {
    this.router.navigate(["/why-proud-smile-component"]);
  }
  
  onDirectionsClick() {
    this.router.navigate(["/why-proud-smile-component"]);
  }
}
