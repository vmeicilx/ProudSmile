import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { HeaderComponent } from "src/app/header/header.component";

@Component({
  selector: "app-single-tooth",
  templateUrl: "./single-tooth.component.html",
  styleUrls: ["./single-tooth.component.scss"]
})
export class SingleToothComponent implements OnInit {
  @ViewChild("rightVideo") rightVideo: ElementRef;
  @ViewChild("implantVideo") implantVideo: ElementRef;
  @ViewChild("implantVideoSmall") implantVideoSmall: ElementRef;
  @ViewChild("target") scrollTarget: ElementRef;

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Dental Implants Gold Coast – Get your Teeth Back");
    this.meta.addTags([{
      name: 'description',
      content: `With Dental Implants you can get a second chance to have your teeth back. At Proud Smile we believe affordability and comfort are the most important factors when looking to have implants.`
    }, { name: 'keywords', content: 'single tooth denture, single tooth implant, single tooth replacement' }]);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.rightVideo.nativeElement.muted = true;
    this.implantVideo.nativeElement.muted = true;
    this.implantVideoSmall.nativeElement.muted = true;
    this.rightVideo.nativeElement.style.display = "block";
    this.implantVideo.nativeElement.style.display = "block";
    this.implantVideoSmall.nativeElement.style.display = "block";
    if(window.innerWidth <= 1200) {
      this.implantVideoSmall.nativeElement.play();
    }
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {
    let playPromise1;
    if (ScrollTrigger.isInViewport(this.rightVideo.nativeElement)) {
      playPromise1 = this.rightVideo.nativeElement.play();
    } else {
      if (playPromise1 !== undefined) {
        playPromise1
          .then((_) => {
            this.rightVideo.nativeElement.pause();
          })
          .catch((error) => {});
      }
    }

    let playPromise2;
    if (ScrollTrigger.isInViewport(this.implantVideo.nativeElement)) {
      playPromise2 = this.implantVideo.nativeElement.play();
    } else {
      if (playPromise2 !== undefined) {
        playPromise2
          .then((_) => {
            this.implantVideo.nativeElement.pause();
          })
          .catch((error) => {});
      }
    }

    let playPromise3;
    if (ScrollTrigger.isInViewport(this.implantVideoSmall.nativeElement)) {
      playPromise3 = this.implantVideoSmall.nativeElement.play();
    } else {
      if (playPromise3 !== undefined) {
        playPromise3
          .then((_) => {
            this.implantVideoSmall.nativeElement.pause();
          })
          .catch((error) => {});
      }
    }

  }


  goToLink(url: string) {
    window.open(url, "_blank");
  }

  scrollToElement($element): void {
    $element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  scrollToTargetAdjusted() {
    var headerOffset =
      document.getElementById("HeaderItem").getBoundingClientRect().height + 20;
    var elementPosition = this.scrollTarget.nativeElement.getBoundingClientRect()
      .top;
    const y = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  }
}
