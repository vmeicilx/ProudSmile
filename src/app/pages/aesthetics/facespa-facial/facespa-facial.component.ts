import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facespa-facial',
  templateUrl: './facespa-facial.component.html',
  styleUrls: ['./facespa-facial.component.scss']
})
export class FacespaFacialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  goToLink(url: string) {
    window.open(url, "_blank");
  }

}
