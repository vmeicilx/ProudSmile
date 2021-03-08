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
  @ViewChild("ExploreButton") exploreButton: ElementRef;
  @ViewChild("PorcelainVeneers") porcelainVeneers: ElementRef;
  @ViewChild("VeneersContent") veneersContent: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  explore() {
    this.porcelainVeneers.nativeElement.style.display = "block";
  }

  showExploreButton() {
    this.loadingText.nativeElement.style.display = "none";
    this.exploreButton.nativeElement.style.display = "block";
  }

  onPresentationCancel() {
    this.porcelainVeneers.nativeElement.style.display = "none";
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
