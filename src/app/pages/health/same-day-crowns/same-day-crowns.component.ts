import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-same-day-crowns",
  templateUrl: "./same-day-crowns.component.html",
  styleUrls: ["./same-day-crowns.component.scss"]
})
export class SameDayCrownsComponent implements OnInit {
  @ViewChild("cerec") cerecVideo: ElementRef;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.cerecVideo.nativeElement.muted = true;
    this.cerecVideo.nativeElement.style.display = "none";
    this.cerecVideo.nativeElement.onfullscreenchange = this.fullscreenChangeHandler;
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {}

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

  fullscreenChangeHandler(event) {
    let elem = event.target;
    let isFullscreen = document.fullscreenElement === elem;
    if (!isFullscreen) {
      elem.style.display = "none";
    }
  }

  playVideo() {
    let video = this.cerecVideo.nativeElement;
    video.style.display = "block";
    video.setAttribute("controls", "controls");
    video.requestFullscreen();
    video.play();
  }

  seeAllFinancial() {
    this.router.navigate(["/", "payment-page-component"]);
  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
