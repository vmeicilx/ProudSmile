import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bundall-email',
  templateUrl: './bundall-email.component.html',
  styleUrls: ['./bundall-email.component.scss']
})
export class BundallEmailComponent implements OnInit {

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
