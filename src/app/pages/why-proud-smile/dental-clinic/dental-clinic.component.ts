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

  @ViewChild("practiceButVideo") practiceButVideo: ElementRef;
  @ViewChild("lightRoomVideo") lightRoomVideo: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.practiceButVideo.nativeElement.muted = true;
    this.lightRoomVideo.nativeElement.muted = true;
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {

    if (this.inTheViewport(this.practiceButVideo.nativeElement)) {
      if (this.practiceButVideo.nativeElement.paused) {
        this.practiceButVideo.nativeElement.play();
      }
    } else {
      if (!this.practiceButVideo.nativeElement.paused) {
        this.practiceButVideo.nativeElement.pause();
      }
    }
    
    if (this.inTheViewport(this.lightRoomVideo.nativeElement)) {
      if (this.lightRoomVideo.nativeElement.paused) {
        this.lightRoomVideo.nativeElement.play();
      }
    } else {
      if (!this.lightRoomVideo.nativeElement.paused) {
        this.lightRoomVideo.nativeElement.pause();
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
