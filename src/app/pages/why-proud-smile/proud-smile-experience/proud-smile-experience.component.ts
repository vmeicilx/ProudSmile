import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

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
