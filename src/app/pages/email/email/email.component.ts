import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
