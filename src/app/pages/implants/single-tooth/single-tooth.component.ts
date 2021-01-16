import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-single-tooth",
  templateUrl: "./single-tooth.component.html",
  styleUrls: ["./single-tooth.component.scss"]
})
export class SingleToothComponent implements OnInit {
  @ViewChild("rightVideo") rightVideo: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.rightVideo.nativeElement.muted = true;
    this.rightVideo.nativeElement.style.display = "block";
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {
    if (this.inTheViewport(this.rightVideo.nativeElement)) {
      if (this.rightVideo.nativeElement.paused) {
        this.rightVideo.nativeElement.play();
      }
    } else {
      if (!this.rightVideo.nativeElement.paused) {
        this.rightVideo.nativeElement.pause();
      }
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

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
