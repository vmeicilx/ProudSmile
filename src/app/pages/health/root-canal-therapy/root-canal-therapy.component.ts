import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root-canal-therapy",
  templateUrl: "./root-canal-therapy.component.html",
  styleUrls: ["./root-canal-therapy.component.scss"]
})
export class RootCanalTherapyComponent implements OnInit {
  constructor(private router: Router) {}

  @ViewChild("rootCanalVideo") video: ElementRef;
  @ViewChild("teethVideo") teeth: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.video.nativeElement.muted = true;
    this.teeth.nativeElement.muted = true;
    this.video.nativeElement.style.display = "block";
    this.video.nativeElement.playbackRate = 0.4;
  }

  seeAllFinancial() {
    this.router.navigate(["/", "payment-page-component"]);
  }

  onCrownsClick() {
    this.router.navigate(["/", "SameDayCrowns"]);
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {
    if (this.inTheViewport(this.video.nativeElement)) {
      if (this.video.nativeElement.paused) {
        this.video.nativeElement.play();
      }
    } else {
      if (!this.video.nativeElement.paused) {
        this.video.nativeElement.pause();
      }
    }

    if (this.inTheViewport(this.teeth.nativeElement)) {
      if (this.teeth.nativeElement.paused) {
        this.teeth.nativeElement.play();
      }
    } else {
      if (!this.teeth.nativeElement.paused) {
        this.teeth.nativeElement.pause();
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
}
