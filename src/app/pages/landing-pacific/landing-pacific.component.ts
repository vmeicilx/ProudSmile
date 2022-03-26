import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-pacific',
  templateUrl: './landing-pacific.component.html',
  styleUrls: ['./landing-pacific.component.scss']
})
export class LandingPacificComponent implements OnInit {

  @ViewChild("PurpleCover") purpleCover: ElementRef;
  
  constructor() { }

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

}
