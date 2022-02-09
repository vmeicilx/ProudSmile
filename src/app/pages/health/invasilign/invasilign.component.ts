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
    let playPromise1;
    if (ScrollTrigger.isInViewport(this.openingVideoEl.nativeElement)) {
      playPromise1 = this.openingVideoEl.nativeElement.play();
    }
    else {
      if (playPromise1 !== undefined) {
        playPromise1.then(_ => {
          this.openingVideoEl.nativeElement.pause();
        })
        .catch(error => {
        });
      }
    }
  }
}
