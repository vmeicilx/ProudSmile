import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-porcelain-veneers",
  templateUrl: "./porcelain-veneers.component.html",
  styleUrls: ["./porcelain-veneers.component.scss"]
})
export class PorcelainVeneersComponent implements OnInit {
  @ViewChild("LoadingText") loadingText: ElementRef;
  @ViewChild("PorcelainVeneers") porcelainVeneers: ElementRef;
  @ViewChild("VeneersContent") veneersContent: ElementRef;

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
