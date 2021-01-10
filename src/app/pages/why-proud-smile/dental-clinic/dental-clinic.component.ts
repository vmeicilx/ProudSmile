import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-dental-clinic",
  templateUrl: "./dental-clinic.component.html",
  styleUrls: ["./dental-clinic.component.scss"]
})
export class DentalClinicComponent implements OnInit {
  constructor() {}

  @ViewChild("roomVideo") roomVideo: ElementRef;
  @ViewChild("practiceButVideo") practiceButVideo: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.roomVideo.nativeElement.muted = true;
    this.practiceButVideo.nativeElement.muted = true;
    this.roomVideo.nativeElement.style.display = "block";
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {
    if (this.inTheViewport(this.roomVideo.nativeElement)) {
      if (this.roomVideo.nativeElement.paused) {
        this.roomVideo.nativeElement.play();
      }
    } else {
      if (!this.roomVideo.nativeElement.paused) {
        this.roomVideo.nativeElement.pause();
      }
    }

    if (this.inTheViewport(this.practiceButVideo.nativeElement)) {
      if (this.practiceButVideo.nativeElement.paused) {
        this.practiceButVideo.nativeElement.play();
      }
    } else {
      if (!this.practiceButVideo.nativeElement.paused) {
        this.practiceButVideo.nativeElement.pause();
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
