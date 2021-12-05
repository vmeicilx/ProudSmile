import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-same-day-veneers',
  templateUrl: './same-day-veneers.component.html',
  styleUrls: ['./same-day-veneers.component.scss']
})
export class SameDayVeneersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
  
  seeGallery() {
    this.router.navigate(["/", "BeforeAndAfter"]);
  }
}
