import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-why-proud-smile',
  templateUrl: './why-proud-smile.component.html',
  styleUrls: ['./why-proud-smile.component.scss']
})
export class WhyProudSmileComponent implements OnInit {

  private elRef: ElementRef;
  private renderer: Renderer2;
  constructor(el: ElementRef, renderer: Renderer2) {
    this.elRef = el;
    this.renderer = renderer;
  }

  ngOnInit(): void {
  }

  
  ngAfterViewInit() {

  }

  onClick(event)
  {
    for (var i = 0; i < this.elRef.nativeElement.children[0].children.length; i++) {
      this.elRef.nativeElement.children[0].children[i].classList.remove('active');
    }
    var target = event.currentTarget;
    target.classList.add("active")
  }

}
