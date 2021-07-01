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
  
  @ViewChild("case0Before") case0Before: ElementRef;
  @ViewChild("case0After") case0After: ElementRef;
  @ViewChild("case1Before") case1Before: ElementRef;
  @ViewChild("case1After") case1After: ElementRef;

  @ViewChild("btn0") btn0: ElementRef;
  @ViewChild("btn1") btn1: ElementRef;

  before = [];
  after = [];
  buttons = [];

  constructor() { }

  ngOnInit(): void {
  }

  
  ngAfterViewInit(): void {
    this.art1.nativeElement.style.opacity = "1";
    this.art2.nativeElement.style.opacity = "0";
    let art1 = true;
    setInterval(function()
    {     
      if(art1)
      {
        this.art1.nativeElement.style.opacity = "0";
        this.art2.nativeElement.style.opacity = "1";
      }
      else{
        this.art1.nativeElement.style.opacity = "1";
        this.art2.nativeElement.style.opacity = "0";
      }
      art1 = !art1;
    }.bind(this), 800);

    this.before.push(this.case0Before.nativeElement);
    this.before.push(this.case1Before.nativeElement);
    this.after.push(this.case0After.nativeElement);
    this.after.push(this.case1After.nativeElement);
    this.buttons.push(this.btn0.nativeElement);
    this.buttons.push(this.btn1.nativeElement);
  }

  toAfter(c: number) {
    const currentCaseBefore = this.before[c];
    const currentCaseAfter = this.after[c];
    currentCaseBefore.style.opacity = "0";
    currentCaseAfter.style.opacity = "1";

    const currentButton = this.buttons[c];
    currentButton.style.visibility = "visible";
    currentButton.classList.remove("gallery-btn-small");
    currentButton.classList.add("gallery-btn-big");
    setTimeout(() => {
    currentButton.style.transition = "unset";
    }, 300);
  }

  toBefore(c: number) {
    const currentCaseBefore = this.before[c];
    const currentCaseAfter = this.after[c];
    currentCaseBefore.style.opacity = "1";
    currentCaseAfter.style.opacity = "0";

    const currentButton = this.buttons[c];
    currentButton.style.transition = "all 0.3s";
    currentButton.style.visibility = "hidden";
  
    currentButton.classList.remove("gallery-btn-big");
    currentButton.classList.add("gallery-btn-small");
  }
}
