import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "src/app/shared/data-service";

@Component({
  selector: "app-same-day-crowns",
  templateUrl: "./same-day-crowns.component.html",
  styleUrls: ["./same-day-crowns.component.scss"],
})
export class SameDayCrownsComponent implements OnInit {
  @ViewChild("cerec") cerecVideo: ElementRef;
  @ViewChild("bridgeVideo") bridgeVideo: ElementRef;
  @ViewChild("marylandVideo") marylandVideo: ElementRef;
  @ViewChild("bridgeMask") bridgeMask: ElementRef;
  @ViewChild("Vulcan") vulcan: ElementRef;
  @ViewChild("PlayButton") PlayButton: ElementRef;
  @ViewChild("CerecPreview") CerecPreview: ElementRef;
  @Output() onVulcanPresent: EventEmitter<any> = new EventEmitter();

  vulcanOn: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.bridgeVideo.nativeElement.muted = true;
    this.bridgeVideo.nativeElement.style.display = "block";
    this.marylandVideo.nativeElement.muted = true;
    this.marylandVideo.nativeElement.style.display = "block";
    this.cerecVideo.nativeElement.muted = false;
    this.cerecVideo.nativeElement.style.display = "none";

    if (window.innerWidth > 1200) {
      if (
        typeof this.cerecVideo.nativeElement.onfullscreenchange != "undefined"
      ) {
        this.cerecVideo.nativeElement.onfullscreenchange =
          this.fullscreenChangeHandler;
      } else {
        this.cerecVideo.nativeElement.onwebkitfullscreenchange =
          this.fullscreenChangeHandler;
      }
    }
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {
    if (this.bridgeVideo) {
      
    this.setMaskHeight();
    }

    let playPromise1;
    if (ScrollTrigger.isInViewport(this.bridgeVideo.nativeElement)) {
      playPromise1 = this.bridgeVideo.nativeElement.play();
    } else {
      if (playPromise1 !== undefined) {
        playPromise1
          .then((_) => {
            this.bridgeVideo.nativeElement.pause();
          })
          .catch((error) => {});
      }
    }

    let playPromise2;
    if (ScrollTrigger.isInViewport(this.marylandVideo.nativeElement)) {
      playPromise2 = this.marylandVideo.nativeElement.play();
    } else {
      if (playPromise2 !== undefined) {
        playPromise2
          .then((_) => {
            this.marylandVideo.nativeElement.pause();
          })
          .catch((error) => {});
      }
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (this.bridgeVideo) {
      
    this.setMaskHeight();
    }
  }

  fullscreenChangeHandler(event) {
    let elem = event.target;
    let isFullscreen = document.fullscreenElement === elem;
    console.log("asa");
    if (!isFullscreen) {
      elem.style.display = "none";
      document.getElementById("CerPrew").style.display = "block";
      console.log("nu");
    }
  }

  playVideo() {
    let video = this.cerecVideo.nativeElement;
    video.style.display = "block";

    if (window.innerWidth > 1200) {
      video.setAttribute("controls", "controls");
      if (
        typeof document.exitFullscreen != "undefined" &&
        document.fullscreenEnabled === true
      ) {
        video.requestFullscreen();
      } else {
        video.webkitRequestFullScreen();
      }
    }

    this.CerecPreview.nativeElement.style.display = "none";
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
    this.setMaskHeight();
  }

  setMaskHeight() {
    this.bridgeMask.nativeElement.style.height =
    this.bridgeVideo.nativeElement.getBoundingClientRect().height - 24 + "px";
  }
}
