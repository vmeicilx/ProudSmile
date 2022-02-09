import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-implant-dentures",
  templateUrl: "./implant-dentures.component.html",
  styleUrls: ["./implant-dentures.component.scss"]
})
export class ImplantDenturesComponent implements OnInit {
  @ViewChild("overdentureVideo") overdentureVideo: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.overdentureVideo.nativeElement.muted = true;
    this.overdentureVideo.nativeElement.style.display = "block";
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {

    let playPromise;
    if (ScrollTrigger.isInViewport(this.overdentureVideo.nativeElement)) {
      playPromise = this.overdentureVideo.nativeElement.play();
    }
    else {
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          this.overdentureVideo.nativeElement.pause();
        })
        .catch(error => {
        });
      }
    }
 



    // if (this.inTheViewport(this.overdentureVideo.nativeElement)) {
    //   if (this.overdentureVideo.nativeElement.paused) {
    //     this.overdentureVideo.nativeElement.play();
    //   }
    // } else {
    //   if (!this.overdentureVideo.nativeElement.paused) {
    //     this.overdentureVideo.nativeElement.pause();
    //   }
    // }
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
