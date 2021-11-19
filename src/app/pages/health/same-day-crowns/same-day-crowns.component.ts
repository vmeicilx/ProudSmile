import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild
} from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "src/app/shared/data-service";

@Component({
  selector: "app-same-day-crowns",
  templateUrl: "./same-day-crowns.component.html",
  styleUrls: ["./same-day-crowns.component.scss"]
})
export class SameDayCrownsComponent implements OnInit {
  @ViewChild("cerec") cerecVideo: ElementRef;
  @ViewChild("bridgeVideo") bridgeVideo: ElementRef;
  @ViewChild("marylandVideo") marylandVideo: ElementRef;
  @ViewChild("bridgeMask") bridgeMask: ElementRef;
  @ViewChild("Vulcan") vulcan: ElementRef;
  @ViewChild("PlayButton") PlayButton: ElementRef;
  @Output() onVulcanPresent: EventEmitter<any> = new EventEmitter();

  vulcanOn: boolean;

  constructor(private router: Router, private data: DataService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.bridgeVideo.nativeElement.muted = true;
    this.bridgeVideo.nativeElement.style.display = "block";
    this.marylandVideo.nativeElement.muted = true;
    this.marylandVideo.nativeElement.style.display = "block";
    this.cerecVideo.nativeElement.muted = true;
    this.cerecVideo.nativeElement.style.display = "none";

    if (
      typeof this.cerecVideo.nativeElement.onfullscreenchange != "undefined"
    ) {
      this.cerecVideo.nativeElement.onfullscreenchange = this.fullscreenChangeHandler;
    } else {
      this.cerecVideo.nativeElement.onwebkitfullscreenchange = this.fullscreenChangeHandler;
    }
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {
    // if (this.inTheViewport(this.vulcan.nativeElement)) {
    //   if (!this.vulcanOn) {
    //     this.onVulcanPresent.emit(true);
    //     this.vulcanOn = true;
    //     this.data.changeMessage("true");
    //   }
    // } else {
    //   if (this.vulcanOn) {
    //     this.onVulcanPresent.emit(false);
    //     this.vulcanOn = false;
    //     this.data.changeMessage("false");
    //   }
    // }

    if (this.inTheViewport(this.bridgeVideo.nativeElement)) {
      if (this.bridgeVideo.nativeElement.paused) {
        this.bridgeVideo.nativeElement.play();
      }
    } else {
      if (!this.bridgeVideo.nativeElement.paused) {
        this.bridgeVideo.nativeElement.pause();
      }
    }

    if (this.inTheViewport(this.marylandVideo.nativeElement)) {
      if (this.marylandVideo.nativeElement.paused) {
        this.marylandVideo.nativeElement.play();
      }
    } else {
      if (!this.marylandVideo.nativeElement.paused) {
        this.marylandVideo.nativeElement.pause();
      }
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (this.bridgeVideo) {
      this.bridgeMask.nativeElement.style.height =
        this.bridgeVideo.nativeElement.getBoundingClientRect().height +
        "px";
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

    if (
      typeof document.exitFullscreen != "undefined" &&
      document.fullscreenEnabled === true
    ) {
      video.requestFullscreen();
    } else {
      video.webkitRequestFullScreen();
    }
    video.play();
  }

  seeAllFinancial() {
    this.router.navigate(["/", "payment-page-component"]);
  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }

  bridgeLoaded() {
    this.bridgeMask.nativeElement.style.display = "block";
    this.bridgeMask.nativeElement.style.height =
      this.bridgeVideo.nativeElement.getBoundingClientRect().height + "px";
  }
}
