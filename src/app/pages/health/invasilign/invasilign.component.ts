import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-invasilign",
  templateUrl: "./invasilign.component.html",
  styleUrls: ["./invasilign.component.scss"]
})
export class InvasilignComponent implements OnInit {
  @ViewChild("openingVideo") openingVideoEl: ElementRef;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.openingVideoEl.nativeElement.muted = true;
    this.openingVideoEl.nativeElement.style.display = "block";
  }

  seeAllFinancial() {
    this.router.navigate(["/", "payment-page-component"]);
  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {
    if (this.inTheViewport(this.openingVideoEl.nativeElement)) {
      if (this.openingVideoEl.nativeElement.paused) {
        this.openingVideoEl.nativeElement.play();
      }
    } else {
      if (!this.openingVideoEl.nativeElement.paused) {
        this.openingVideoEl.nativeElement.pause();
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
