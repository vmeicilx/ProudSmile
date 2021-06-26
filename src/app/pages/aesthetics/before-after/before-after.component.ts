import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-before-after',
  templateUrl: './before-after.component.html',
  styleUrls: ['./before-after.component.scss']
})
export class BeforeAfterComponent implements OnInit {

  
  @ViewChild("art1") art1: ElementRef;
  @ViewChild("art2") art2: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  
  ngAfterViewInit(): void {
    this.art1.nativeElement.style.display = "block";
    this.art1.nativeElement.style.opacity = "1";
    this.art2.nativeElement.style.display = "none";
    this.art2.nativeElement.style.opacity = "0";
    this.art1.nativeElement.style.transition = "opacity 1s ease-out";
    this.art2.nativeElement.style.transition = "opacity 1s ease-out";
    let art1 = true;
    setInterval(function()
    {     
      if(art1)
      {
        this.art1.nativeElement.style.display = "none";
        this.art1.nativeElement.style.opacity = "0";
        this.art2.nativeElement.style.display = "block"; 
        this.art2.nativeElement.style.opacity = "1";
      }
      else{
        this.art1.nativeElement.style.display = "block";
        this.art1.nativeElement.style.opacity = "1";
        this.art2.nativeElement.style.display = "none"; 
        this.art2.nativeElement.style.opacity = "0";
      }
      art1 = !art1;
    }.bind(this), 800);
  }

}
