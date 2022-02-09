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
    if(window.innerWidth > 1200) {
      this.erwContainer.nativeElement.style.height =
      this.erwImg.nativeElement.getBoundingClientRect().height + "px";
    this.erwContainer.nativeElement.style.display = "block";
    }
    
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {

    let playPromise1;
    if (ScrollTrigger.isInViewport(this.biocareVideo.nativeElement)) {
      playPromise1 = this.biocareVideo.nativeElement.play();
    } else {
      if (playPromise1 !== undefined) {
        playPromise1
          .then((_) => {
            this.biocareVideo.nativeElement.pause();
          })
          .catch((error) => {});
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

  toothLoaded() {
    this.toothContainer.nativeElement.style.height =
      this.toothImage.nativeElement.getBoundingClientRect().height + "px";
  }
}
