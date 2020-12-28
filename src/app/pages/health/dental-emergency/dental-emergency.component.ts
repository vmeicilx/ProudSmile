import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dental-emergency",
  templateUrl: "./dental-emergency.component.html",
  styleUrls: ["./dental-emergency.component.scss"]
})
export class DentalEmergencyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  goToLinkWithotNewTab(url: string) {
    window.open(url, "_self");
  }
}
