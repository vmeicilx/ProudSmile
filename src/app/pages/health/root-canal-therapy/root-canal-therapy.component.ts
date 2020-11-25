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
  templateUrl: "./root-canal-therapy.component.html"
})
export class RootCanalTherapyComponent implements OnInit {
  constructor(private router: Router) {}

  @ViewChild("rootCanalVideo") video: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.video.nativeElement.muted = true;
    this.video.nativeElement.muted = false;
  }

  seeAllFinancial() {
    this.router.navigate(["/", "payment-page-component"]);
  }

  onCrownsClick() {
    this.router.navigate(["/", "SameDayCrowns"]);
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {
    if (
      this.video.nativeElement.getBoundingClientRect().top < 350 &&
      this.video.nativeElement.getBoundingClientRect().top > -1000
    ) {
      if (this.video.nativeElement.paused) {
        this.video.nativeElement.play();
      }
    } else {
      if (!this.video.nativeElement.paused) {
        this.video.nativeElement.pause();
      }
    }
  }
}
