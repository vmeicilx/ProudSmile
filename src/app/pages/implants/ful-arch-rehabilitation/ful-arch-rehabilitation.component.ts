import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-ful-arch-rehabilitation",
  templateUrl: "./ful-arch-rehabilitation.component.html",
  styleUrls: ["./ful-arch-rehabilitation.component.scss"]
})
export class FulArchRehabilitationComponent implements OnInit {
  @ViewChild("ErwContainer") erwContainer: ElementRef;
  @ViewChild("ErwImg") erwImg: ElementRef;
  @ViewChild("biocareVideo") biocareVideo: ElementRef;
  @ViewChild("biocareVideoMobile") biocareVideoMobile: ElementRef;
  @ViewChild("toothContainer") toothContainer: ElementRef;
  @ViewChild("toothImage") toothImage: ElementRef;

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Full Arch Implants Gold Coast - Free Consultation");
    this.meta.addTags([{
      name: 'description',
      content: `Being able to restore an entire arch of teeth can have an amazing impact if your life. Find out about our minimally invasive approach to dental implants.`
    }, { name: 'keywords', content: 'full mouth dental implants, full arch dental implants, full mouth dental implants australia' }]);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.biocareVideo.nativeElement.muted = true;
    this.biocareVideo.nativeElement.style.display = "block";
    this.biocareVideoMobile.nativeElement.muted = true;
    this.biocareVideoMobile.nativeElement.style.display = "block";
  }

  erwImgLoad() {
    if(window.innerWidth > 1200) {
      this.erwContainer.nativeElement.style.height =
      this.erwImg.nativeElement.getBoundingClientRect().height + "px";
    this.erwContainer.nativeElement.style.display = "block";
    }
    
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {

    let playPromise1;
    if (ScrollTrigger.isInViewport(this.biocareVideo.nativeElement)) {
      playPromise1 = this.biocareVideo.nativeElement.play();
    } else {
      if (playPromise1 !== undefined) {
        playPromise1
          .then((_) => {
            this.biocareVideo.nativeElement.pause();
          })
          .catch((error) => {});
      }
    }

    let playPromise2;
    if (ScrollTrigger.isInViewport(this.biocareVideoMobile.nativeElement)) {
      playPromise2 = this.biocareVideoMobile.nativeElement.play();
    } else {
      if (playPromise2 !== undefined) {
        playPromise2
          .then((_) => {
            this.biocareVideoMobile.nativeElement.pause();
          })
          .catch((error) => {});
      }
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (this.toothImage) {
      this.toothContainer.nativeElement.style.height =
        this.toothImage.nativeElement.getBoundingClientRect().height + "px";
    }
  }

  toothLoaded() {
    this.toothContainer.nativeElement.style.height =
      this.toothImage.nativeElement.getBoundingClientRect().height + "px";
  }
}
