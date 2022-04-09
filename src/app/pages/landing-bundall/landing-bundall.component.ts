import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-bundall',
  templateUrl: './landing-bundall.component.html',
  styleUrls: ['./landing-bundall.component.scss']
})
export class LandingBundallComponent implements OnInit {

  @ViewChild("BrownCover") brownCover: ElementRef;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.brownCover.nativeElement.style.height = this.brownCover.nativeElement.parentElement.getBoundingClientRect().height + "px";

  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.brownCover.nativeElement.style.height = this.brownCover.nativeElement.parentElement.getBoundingClientRect().height + "px";
  }

  
  goToLink(url: string) {
    window.open(url, "_blank");
  }

  goToMail(url: string) {
    window.open("mailto: " + url, "_self");
  }

  onContactForm() {
    const promise1 = new Promise((resolve, reject) => {
      this.router.navigate(["/", "contact-page-component"]);
      resolve("Success!");
    });

    promise1.then((value) => {
      var clientForm = document.getElementById("ClientForm");
      clientForm.scrollIntoView(true);
    });
  }


}
