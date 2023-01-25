import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-same-day-crowns",
  templateUrl: "./same-day-crowns.component.html",
  styleUrls: ["./same-day-crowns.component.scss"],
})
export class SameDayCrownsComponent implements OnInit {
  @ViewChild("cerec") cerecVideo: ElementRef;
  @ViewChild("bridgeVideo") bridgeVideo: ElementRef;
  @ViewChild("marylandVideo") marylandVideo: ElementRef;
  @ViewChild("cerecMobile") cerecVideoMobile: ElementRef;
  @ViewChild("bridgeVideoMobile") bridgeVideoMobile: ElementRef;
  @ViewChild("marylandVideoMobile") marylandVideoMobile: ElementRef;
  @ViewChild("bridgeMask") bridgeMask: ElementRef;
  @ViewChild("bridgeMaskMobile") bridgeMaskMobile: ElementRef;
  @ViewChild("Vulcan") vulcan: ElementRef;
  @ViewChild("PlayButton") PlayButton: ElementRef;
  @ViewChild("CerecPreview") CerecPreview: ElementRef;
  @Output() onVulcanPresent: EventEmitter<any> = new EventEmitter();

  vulcanOn: boolean;

  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.title.setTitle("Same day Crowns - Designed by us, made by us, for today");
    this.meta.addTags([{
      name: 'description',
      content: `Both our Gold Coast locations offer same day crowns for weak, discoloured or broken teeth. State-of-the-art technology, affordable payment methods. Book Now.`
    }, { name: 'keywords', content: 'same day crowns, dental crowns gold coast, same day porcelain crowns' }]);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.bridgeVideo.nativeElement.muted = true;
    this.bridgeVideo.nativeElement.style.display = "block";
    this.marylandVideo.nativeElement.muted = true;
    this.marylandVideo.nativeElement.style.display = "block";
    this.cerecVideo.nativeElement.muted = false;
    this.cerecVideo.nativeElement.style.display = "none";
    this.cerecVideoMobile.nativeElement.muted = false;
    this.cerecVideoMobile.nativeElement.style.display = "none";
    this.bridgeVideoMobile.nativeElement.muted = true;
    this.bridgeVideoMobile.nativeElement.style.display = "block";
    this.marylandVideoMobile.nativeElement.muted = true;
    this.marylandVideoMobile.nativeElement.style.display = "block";

    if (window.innerWidth >= 1200) {
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

    if (window.innerWidth < 1200) {
      if (
        typeof this.cerecVideoMobile.nativeElement.onfullscreenchange != "undefined"
      ) {
        this.cerecVideoMobile.nativeElement.onfullscreenchange =
          this.fullscreenChangeHandler;
      } else {
        this.cerecVideoMobile.nativeElement.onwebkitfullscreenchange =
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

    let playPromise3;
    if (ScrollTrigger.isInViewport(this.bridgeVideoMobile.nativeElement)) {
      playPromise3 = this.bridgeVideoMobile.nativeElement.play();
    } else {
      if (playPromise3 !== undefined) {
        playPromise3
          .then((_) => {
            this.bridgeVideoMobile.nativeElement.pause();
          })
          .catch((error) => {});
      }
    }

    let playPromise4;
    if (ScrollTrigger.isInViewport(this.marylandVideoMobile.nativeElement)) {
      playPromise4 = this.marylandVideoMobile.nativeElement.play();
    } else {
      if (playPromise4 !== undefined) {
        playPromise4
          .then((_) => {
            this.marylandVideoMobile.nativeElement.pause();
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
    
    if (window.innerWidth >= 1200) {
      video = this.cerecVideo.nativeElement;
      
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
    }
    else if(window.innerWidth < 1200) {
      video = this.cerecVideoMobile.nativeElement;
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
    }

    this.CerecPreview.nativeElement.style.display = "none";
    video.play();
  }

  seeAllFinancial() {
    this.router.navigate(["/", "PaymentPage"]);
  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }

  bridgeLoaded() {
    if (window.innerWidth >= 1200) {
      
      
    this.bridgeMask.nativeElement.style.display = "block";
      }
      else if(window.innerWidth < 1200) {
        
      
    this.bridgeMaskMobile.nativeElement.style.display = "block";
      }
      
    this.setMaskHeight();
  }

  setMaskHeight() {
    
    if (window.innerWidth >= 1200) {
      
    this.bridgeMask.nativeElement.style.height =
    this.bridgeVideo.nativeElement.getBoundingClientRect().height - 12 + "px";
    }
    else if(window.innerWidth < 1200) {
      
    this.bridgeMaskMobile.nativeElement.style.height =
    this.bridgeVideoMobile.nativeElement.getBoundingClientRect().height - 12 + "px";
    }
  }
}
