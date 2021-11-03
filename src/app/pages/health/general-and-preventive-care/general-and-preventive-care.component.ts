import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from "@angular/core";
import { Router } from "@angular/router";
import { SharedService } from "src/app/shared/shared-service";

@Component({
  selector: "app-general-and-preventive-care",
  templateUrl: "./general-and-preventive-care.component.html",
  styleUrls: ["./general-and-preventive-care.component.scss"]
})
export class GeneralAndPreventiveCareComponent implements OnInit {
  @ViewChild("firstVideo") video: ElementRef;

  id: number;

  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.video.nativeElement.muted = true;
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

  maximize(ev) {
    this.sharedService.sendClickEvent(ev);
  }
  
  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
