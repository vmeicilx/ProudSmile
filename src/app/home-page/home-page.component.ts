import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  @ViewChild('v0') vid: ElementRef;

  constructor() {}

  ngOnInit() {
    this.vid.nativeElement.pause();
    window.addEventListener('scroll', this.scroll, true);

    setInterval(function(){
      this.vid.nativeElement.currentTime = window.pageYOffset/400;
  }, 40);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (event): void => {
    this.vid.nativeElement.pause();
  };
}
