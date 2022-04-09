import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-pacific',
  templateUrl: './landing-pacific.component.html',
  styleUrls: ['./landing-pacific.component.scss']
})
export class LandingPacificComponent implements OnInit {

  @ViewChild("PurpleCover") purpleCover: ElementRef;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.purpleCover.nativeElement.style.height = this.purpleCover.nativeElement.parentElement.getBoundingClientRect().height + "px";

  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.purpleCover.nativeElement.style.height = this.purpleCover.nativeElement.parentElement.getBoundingClientRect().height + "px";
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
