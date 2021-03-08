import { Component, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Component({
  selector: "app-aesthetics",
  templateUrl: "./aesthetics.component.html"
})
export class AestheticsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onCalculatorCancel() {
    //this.calculatorOverlay.nativeElement.style.display = "none";
  }
}
