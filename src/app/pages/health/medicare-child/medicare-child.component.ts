import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-medicare-child",
  templateUrl: "./medicare-child.component.html"
})
export class MedicareChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  goToLink(url: string) {
    window.open(url, "_blank");
  }
  goToLinkWithotNewTab(url: string) {
    window.open(url, "_self");
  }
}
