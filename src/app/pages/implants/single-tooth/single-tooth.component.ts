import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from "@angular/core";
import { HeaderComponent } from "src/app/header/header.component";

@Component({
  selector: "app-single-tooth",
  templateUrl: "./single-tooth.component.html",
  styleUrls: ["./single-tooth.component.scss"]
})
export class SingleToothComponent implements OnInit {
  @ViewChild("rightVideo") rightVideo: ElementRef;
  @ViewChild("implantVideo") implantVideo: ElementRef;
  @ViewChild("implantVideoSmall") implantVideoSmall: ElementRef;
  @ViewChild("target") scrollTarget: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.rightVideo.nativeElement.muted = true;
    this.implantVideo.nativeElement.muted = true;
    this.implantVideoSmall.nativeElement.muted = true;
    this.rightVideo.nativeElement.style.display = "block";
    this.implantVideo.nativeElement.style.display = "block";
    this.implantVideoSmall.nativeElement.style.display = "block";
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
    if (this.inTheViewport(this.implantVideo.nativeElement)) {
      if (this.implantVideo.nativeElement.paused) {
        this.implantVideo.nativeElement.play();
      }
    } else {
      if (!this.implantVideo.nativeElement.paused) {
        this.implantVideo.nativeElement.pause();
      }
    }
    if (this.inTheViewport(this.implantVideoSmall.nativeElement)) {
      if (this.implantVideoSmall.nativeElement.paused) {
        this.implantVideoSmall.nativeElement.play();
      }
    } else {
      if (!this.implantVideoSmall.nativeElement.paused) {
        this.implantVideoSmall.nativeElement.pause();
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

  scrollToElement($element): void {
    $element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  scrollToTargetAdjusted() {
    var headerOffset =
      document.getElementById("HeaderItem").getBoundingClientRect().height + 20;
    var elementPosition = this.scrollTarget.nativeElement.getBoundingClientRect()
      .top;
    const y = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  }
}
