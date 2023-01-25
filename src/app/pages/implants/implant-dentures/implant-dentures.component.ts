import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-implant-dentures",
  templateUrl: "./implant-dentures.component.html",
  styleUrls: ["./implant-dentures.component.scss"]
})
export class ImplantDenturesComponent implements OnInit {
  @ViewChild("overdentureVideo") overdentureVideo: ElementRef;
  @ViewChild("overdentureVideoMobile") overdentureVideoMobile: ElementRef;

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Implant Supported Dentures | Proud Smile Gold Coast");
    this.meta.addTags([{
      name: 'description',
      content: `Increase the stability of your denture with as little as two implants and starting from just $3500. Proud Smile offers minimally invasive implants for faster healing.`
    }, { name: 'keywords', content: 'implant retained dentures, implant supported dentures, implant supported dentures australia' }]);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.overdentureVideo.nativeElement.muted = true;
    this.overdentureVideo.nativeElement.style.display = "block";
    this.overdentureVideoMobile.nativeElement.muted = true;
    this.overdentureVideoMobile.nativeElement.style.display = "block";
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

    let playPromise2;
    if (ScrollTrigger.isInViewport(this.overdentureVideoMobile.nativeElement)) {
      playPromise2 = this.overdentureVideoMobile.nativeElement.play();
    }
    else {
      if (playPromise2 !== undefined) {
        playPromise2.then(_ => {
          this.overdentureVideoMobile.nativeElement.pause();
        })
        .catch(error => {
        });
      }
    }
  }
}
