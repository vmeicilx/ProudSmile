import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-general-and-preventive-care",
  templateUrl: "./general-and-preventive-care.component.html",
  styleUrls: ["./general-and-preventive-care.component.scss"]
})
export class GeneralAndPreventiveCareComponent implements OnInit {
  @ViewChild("firstVideo") video: ElementRef;
  @ViewChild("chairVideo") chair: ElementRef;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.video.nativeElement.muted = true;
    this.chair.nativeElement.muted = true;
    this.video.nativeElement.style.display = "block";
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
    if (this.inTheViewport(this.chair.nativeElement)) {
      if (this.chair.nativeElement.paused) {
        this.chair.nativeElement.play();
      }
    } else {
      if (!this.chair.nativeElement.paused) {
        this.chair.nativeElement.pause();
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

  seeAllFinancial() {
    this.router.navigate(["/", "payment-page-component"]);
  }
}
