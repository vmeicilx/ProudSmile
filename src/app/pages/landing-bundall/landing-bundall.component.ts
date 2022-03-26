import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-bundall',
  templateUrl: './landing-bundall.component.html',
  styleUrls: ['./landing-bundall.component.scss']
})
export class LandingBundallComponent implements OnInit {

  @ViewChild("BrownCover") brownCover: ElementRef;

  constructor() { }

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


}
