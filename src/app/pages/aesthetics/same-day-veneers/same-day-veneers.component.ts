import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-same-day-veneers',
  templateUrl: './same-day-veneers.component.html',
  styleUrls: ['./same-day-veneers.component.scss']
})
export class SameDayVeneersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
