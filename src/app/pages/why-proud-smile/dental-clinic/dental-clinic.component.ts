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
    this.practiceButVideo.nativeElement.play();
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {

    let playPromise1;
    if (ScrollTrigger.isInViewport(this.practiceButVideo.nativeElement)) {
      playPromise1 = this.practiceButVideo.nativeElement.play();
    }
    else {
      if (playPromise1 !== undefined) {
        playPromise1.then(_ => {
          this.practiceButVideo.nativeElement.pause();
        })
        .catch(error => {
        });
      }
    }

    let playPromise2;
    if (ScrollTrigger.isInViewport(this.lightRoomVideo.nativeElement)) {
      playPromise2 = this.lightRoomVideo.nativeElement.play();
    }
    else {
      if (playPromise2 !== undefined) {
        playPromise2.then(_ => {
          this.lightRoomVideo.nativeElement.pause();
        })
        .catch(error => {
        });
      }
    }
    
  }
}
