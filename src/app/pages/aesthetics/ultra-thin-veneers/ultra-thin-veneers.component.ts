import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-ultra-thin-veneers",
  templateUrl: "./ultra-thin-veneers.component.html",
  styleUrls: ["./ultra-thin-veneers.component.scss"]
})
export class UltraThinVeneersComponent implements OnInit {
  @ViewChild("LoadingTextUltraThin") loadingText: ElementRef;
  @ViewChild("UltraThinVeneers") porcelainVeneers: ElementRef;
  @ViewChild("UltraThinVeneersContent") veneersContent: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  showExploreButton() {
    this.loadingText.nativeElement.style.display = "none";
    this.porcelainVeneers.nativeElement.style.display = "block";
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
