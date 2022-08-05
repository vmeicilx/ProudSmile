import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-dental-clinic",
  templateUrl: "./dental-clinic.component.html",
  styleUrls: ["./dental-clinic.component.scss"]
})
export class DentalClinicComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Our Dental Clinic - A dental practice but not as you know it");
    this.meta.addTags([{
      name: 'description',
      content: `The moment you walk through our doors you’ll notice something is different and you may even wonder if you’ve come to the right place. Bundall and Pacific Fair.`
    }]);
  }

  @ViewChild("practiceButVideo") practiceButVideo: ElementRef;
  @ViewChild("practiceButVideoMobile") practiceButVideoMobile: ElementRef;
  @ViewChild("lightRoomVideo") lightRoomVideo: ElementRef;
  @ViewChild("lightRoomVideoMobile") lightRoomVideoMobile: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.practiceButVideo.nativeElement.muted = true;
    this.practiceButVideoMobile.nativeElement.muted = true;
    this.lightRoomVideo.nativeElement.muted = true;
    this.lightRoomVideoMobile.nativeElement.muted = true;

    if(window.innerWidth > 1200) {

      this.practiceButVideo.nativeElement.play();
    }
    else {

      this.lightRoomVideoMobile.nativeElement.play();
    }
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {

    if(window.innerWidth > 1200) {
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
    } else {
      let playPromise4;
      if (ScrollTrigger.isInViewport(this.practiceButVideoMobile.nativeElement)) {
        playPromise4 = this.practiceButVideoMobile.nativeElement.play();
      }
      else {
        if (playPromise4 !== undefined) {
          playPromise4.then(_ => {
            this.practiceButVideoMobile.nativeElement.pause();
          })
          .catch(error => {
          });
        }
      }

      let playPromise3;
      if (ScrollTrigger.isInViewport(this.lightRoomVideoMobile.nativeElement)) {
        playPromise3 = this.lightRoomVideoMobile.nativeElement.play();
      }
      else {
        if (playPromise3 !== undefined) {
          playPromise3.then(_ => {
            this.lightRoomVideoMobile.nativeElement.pause();
          })
          .catch(error => {
          });
        }
      }
    }
  }
}
