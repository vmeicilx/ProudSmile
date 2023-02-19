import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou-pacific',
  templateUrl: './thankyou-pacific.component.html',
  styleUrls: ['./thankyou-pacific.component.scss']
})
export class ThankyouPacificComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {
    var header = document.getElementsByTagName("app-header") as HTMLCollectionOf<HTMLElement>;
    if(header && header[0]) {
      header[0].style.display = "none";
    }

    
    var footer = document.getElementsByTagName("app-footer") as HTMLCollectionOf<HTMLElement>;
    if(footer && footer[0]) {
      footer[0].style.display = "none";
    }
  }

  ngAfterViewInit() {
    
    var header = document.getElementsByTagName("app-header") as HTMLCollectionOf<HTMLElement>;
    if(header && header[0]) {
      header[0].style.display = "none";
    }

    
    var footer = document.getElementsByTagName("app-footer") as HTMLCollectionOf<HTMLElement>;
    if(footer && footer[0]) {
      footer[0].style.display = "none";
    }
  }

  onHomePage() {
    this.router.navigate(["/"]);
    window.scrollTo(0, 0);
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
