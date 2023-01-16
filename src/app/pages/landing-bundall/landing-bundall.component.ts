import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-bundall',
  templateUrl: './landing-bundall.component.html',
  styleUrls: ['./landing-bundall.component.scss']
})
export class LandingBundallComponent implements OnInit {

  @ViewChild("BrownCover") brownCover: ElementRef;

  constructor(private router: Router, private title: Title, private meta: Meta) { 
    this.title.setTitle("Proud Smile Dental and Aesthetics | Bundall | Gold Coast");
    this.meta.addTags([{
      name: 'description',
      content: `Proud Smile Dental and Aesthetics in Bundall is our flagship clinic. Created 10 years ago we're a modern and non traditional and we're a practice of firsts.`
    }]);
  }

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
      this.router.navigate(["/", "ContactPage"]);
      resolve("Success!");
    });

    promise1.then((value) => {
      var clientForm = document.getElementById("ClientForm");
      clientForm.scrollIntoView(true);
    });
  }


}
