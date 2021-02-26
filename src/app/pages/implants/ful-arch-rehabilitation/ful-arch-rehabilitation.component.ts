import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-ful-arch-rehabilitation",
  templateUrl: "./ful-arch-rehabilitation.component.html",
  styleUrls: ["./ful-arch-rehabilitation.component.scss"]
})
export class FulArchRehabilitationComponent implements OnInit {
  @ViewChild("ErwContainer") erwContainer: ElementRef;
  @ViewChild("ErwImg") erwImg: ElementRef;
  @ViewChild("biocareVideo") biocareVideo: ElementRef;
  @ViewChild("toothContainer") toothContainer: ElementRef;
  @ViewChild("toothImage") toothImage: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.biocareVideo.nativeElement.muted = true;
    this.biocareVideo.nativeElement.style.display = "block";
  }

  erwImgLoad() {
    this.erwContainer.nativeElement.style.height =
      this.erwImg.nativeElement.getBoundingClientRect().height + "px";
    this.erwContainer.nativeElement.style.display = "block";
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {
    if (this.inTheViewport(this.biocareVideo.nativeElement)) {
      if (this.biocareVideo.nativeElement.paused) {
        this.biocareVideo.nativeElement.play();
      }
    } else {
      if (!this.biocareVideo.nativeElement.paused) {
        this.biocareVideo.nativeElement.pause();
      }
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (this.toothImage) {
      this.toothContainer.nativeElement.style.height =
        this.toothImage.nativeElement.getBoundingClientRect().height + "px";
    }
  }

  inTheViewport(elem): boolean {
    var bounding = elem.getBoundingClientRect();
    if (
      bounding.top >= -elem.offsetHeight &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) +
          elem.offsetHeight
    ) {
      return true;
    } else {
      return false;
    }
  }

  toothLoaded() {
    this.toothContainer.nativeElement.style.height =
      this.toothImage.nativeElement.getBoundingClientRect().height + "px";
  }
}
