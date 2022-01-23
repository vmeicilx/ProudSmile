import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { ScrollFramerSectionComponent } from "src/app/custom-components/scroll-framer-section/scroll-framer-section.component";

@Component({
  selector: "app-porcelain-veneers",
  templateUrl: "./porcelain-veneers.component.html",
  styleUrls: ["./porcelain-veneers.component.scss"],
})
export class PorcelainVeneersComponent implements OnInit {
  secondFrameStartAnimation: Subject<void> = new Subject<void>();
  secondFrameStopAnimation: Subject<void> = new Subject<void>();

  fourthFrameStartAnimation: Subject<void> = new Subject<void>();
  fourthFrameStopAnimation: Subject<void> = new Subject<void>();

  sixthFrameStartAnimation: Subject<void> = new Subject<void>();
  sixthFrameStopAnimation: Subject<void> = new Subject<void>();

  eightFrameStartAnimation: Subject<void> = new Subject<void>();
  eightFrameStopAnimation: Subject<void> = new Subject<void>();

  nineFrameStartAnimation: Subject<void> = new Subject<void>();
  nineFrameStopAnimation: Subject<void> = new Subject<void>();

  tenFrameStartAnimation: Subject<void> = new Subject<void>();
  tenFrameStopAnimation: Subject<void> = new Subject<void>();

  @ViewChild("LoadingText") loadingText: ElementRef;
  @ViewChild("PorcelainVeneers") porcelainVeneers: ElementRef;
  @ViewChild("AnimContainer") animContainer: ElementRef;
  @ViewChild("TopFade") topFade: ElementRef;
  @ViewChild("BottomFade") bottomFade: ElementRef;
  @ViewChild("PresentationView") presentationView: ElementRef;

  @ViewChild("TopBackground") topBackground: ElementRef;
  @ViewChild("BottomBackground") bottomBackground: ElementRef;

  @ViewChild("FirstFrame") firstFrame: ElementRef;
  @ViewChild("SecondFrame") secondFrame: ElementRef;
  @ViewChild("ThirdFrame") thirdFrame: ElementRef;
  @ViewChild("FourthFrame") fourthFrame: ElementRef;
  @ViewChild("FifthFrame") fifthFrame: ElementRef;
  @ViewChild("SixthFrame") sixthFrame: ElementRef;
  @ViewChild("SeventhFrame") seventhFrame: ElementRef;
  @ViewChild("EightFrame") eightFrame: ElementRef;
  @ViewChild("NineFrame") nineFrame: ElementRef;
  @ViewChild("TenFrame") tenFrame: ElementRef;
  @ViewChild("LastFrame") lastFrame: ElementRef;

  @ViewChild("FirstText") firstText: ElementRef;
  @ViewChild("FirstTextImg") firstTextImg: ElementRef;
  @ViewChild("SecondText") secondText: ElementRef;
  @ViewChild("SecondTextImg") secondTextImg: ElementRef;
  @ViewChild("ThirdText") thirdText: ElementRef;
  @ViewChild("SixthText") sixthText: ElementRef;
  @ViewChild("SeventhText") seventhText: ElementRef;
  @ViewChild("EightText") eightText: ElementRef;
  @ViewChild("NineText") nineText: ElementRef;
  @ViewChild("TenText") tenText: ElementRef;
  @ViewChild("ElevenText") elevenText: ElementRef;
  @ViewChild("LastButton") lastButton: ElementRef;

  @ViewChild("FirstFrameImg") firstFrameImg: ElementRef;
  @ViewChild("SecondFrameVideo") secondFrameVideo: ScrollFramerSectionComponent;
  @ViewChild("ThirdFrameImg") thirdFrameImg: ElementRef;
  @ViewChild("FourthFrameVideo") fourthFrameVideo: ScrollFramerSectionComponent;
  @ViewChild("FifthFrameImg") fifthFrameImg: ElementRef;
  @ViewChild("SixthFrameVideo") sixthFrameVideo: ScrollFramerSectionComponent;
  @ViewChild("SeventhFrameImg") seventhFrameImg: ElementRef;
  @ViewChild("EightFrameVideo") eightFrameVideo: ScrollFramerSectionComponent;
  @ViewChild("NineFrameVideo") nineFrameVideo: ScrollFramerSectionComponent;
  @ViewChild("TenFrameVideo") tenFrameVideo: ScrollFramerSectionComponent;
  @ViewChild("LastFrameImg") lastFrameImg: ScrollFramerSectionComponent;

  @ViewChild("SuggestionButton") suggestionButton: ElementRef;
  @ViewChild("SuggestionButtonUp") suggestionButtonUp: ElementRef;
  @ViewChild("HelperText") HelperText: ElementRef;

  @ViewChild("DownArrow") DownArrow: ElementRef;
  @ViewChild("MobileSuggestion") MobileSuggestion: ElementRef;

  currentFrame = 0;
  framePositions = [
    1000, 8100, 9500, 11500, 13443, 16143, 20143, 21043, 22043, 23179,
  ];

  firstFramePosition = 250;

  sections = 0;

  firstTextImgWidth = 40;
  secondTextImgWidth = 40;
  presentationHeight = 0;
  activeFrameIndex = 0;

  frames = [];
  framesContent = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.frames = [
      this.firstFrame.nativeElement,
      this.secondFrame.nativeElement,
      this.thirdFrame.nativeElement,
      this.fourthFrame.nativeElement,
      this.fifthFrame.nativeElement,
      this.sixthFrame.nativeElement,
      this.seventhFrame.nativeElement,
      this.eightFrame.nativeElement,
      this.nineFrame.nativeElement,
      this.tenFrame.nativeElement,
    ];

    this.framesContent = [
      this.firstFrameImg.nativeElement,
      this.secondFrameVideo.scrollCanvas.nativeElement,
      this.thirdFrameImg.nativeElement,
      this.fourthFrameVideo.scrollCanvas.nativeElement,
      this.fifthFrameImg.nativeElement,
      this.sixthFrameVideo.scrollCanvas.nativeElement,
      this.seventhFrameImg.nativeElement,
      this.eightFrameVideo.scrollCanvas.nativeElement,
      this.nineFrameVideo.scrollCanvas.nativeElement,
      this.tenFrameVideo.scrollCanvas.nativeElement,
    ];
    this.showorHideMobileSuggestion();
  }

  showExploreButton() {
    this.sections += 1;

    if (this.sections === 6) {
      this.loadingText.nativeElement.style.display = "none";
      this.porcelainVeneers.nativeElement.style.display = "block";

      window.scrollTo(0, 0);
      setTimeout(
        function () {
          //this.porcelainVeneers.nativeElement.scrollTo(0, 0);
          window.scrollTo(0, 0);
        }.bind(this),
        20
      );
    }
  }

  showorHideMobileSuggestion(): void {
    if(window.scrollY < this.framePositions[this.framePositions.length - 1] && window.innerWidth < 600 && window.innerWidth < window.innerHeight) {
        this.MobileSuggestion.nativeElement.style.display = "block";
    }
    else {
      this.MobileSuggestion.nativeElement.style.display = "none";
    }
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {
    this.renderPresentation();
  }

  renderPresentation() {
    let parent =
      this.presentationView.nativeElement.parentElement.getBoundingClientRect();
    if (parent.top < 0 && parent.top >= -23000) {
      this.presentationView.nativeElement.style.position = "fixed";
      this.topBackground.nativeElement.style.position = "fixed";
      this.bottomBackground.nativeElement.style.position = "fixed";
      this.presentationView.nativeElement.style.top =
        this.topBackground.nativeElement.getBoundingClientRect().height + "px";
      this.topBackground.nativeElement.style.top = "0";
      this.bottomBackground.nativeElement.style.bottom = "0";
    } else {
      this.presentationView.nativeElement.style.position = "relative";
      this.topBackground.nativeElement.style.position = "relative";
      this.bottomBackground.nativeElement.style.position = "relative";
      this.presentationView.nativeElement.style.top = "unset";
      this.topBackground.nativeElement.style.top = "unset";
      this.bottomBackground.nativeElement.style.top = "unset";
    }

    if (parent.top < 0 && parent.top > -1700) {
      this.setFramesDisplay(0);
      this.secondFrameStopAnimation.next();
      this.fourthFrameStopAnimation.next();
      this.sixthFrameStopAnimation.next();
      this.eightFrameStopAnimation.next();
      this.nineFrameStopAnimation.next();
      this.tenFrameStopAnimation.next();
    } else if (parent.top <= -1700 && parent.top > -8700) {
      this.setFramesDisplay(1);
      this.secondFrameStartAnimation.next();
      this.fourthFrameStopAnimation.next();
      this.sixthFrameStopAnimation.next();
      this.eightFrameStopAnimation.next();
      this.nineFrameStopAnimation.next();
      this.tenFrameStopAnimation.next();
    } else if (parent.top <= -7000 && parent.top > -8000) {
      this.setFramesDisplay(2);
      this.secondFrameStopAnimation.next();
      this.fourthFrameStopAnimation.next();
      this.sixthFrameStopAnimation.next();
      this.eightFrameStopAnimation.next();
      this.nineFrameStopAnimation.next();
      this.tenFrameStopAnimation.next();
    } else if (parent.top <= -8000 && parent.top > -11000) {
      this.setFramesDisplay(3);
      this.secondFrameStopAnimation.next();
      this.fourthFrameStartAnimation.next();
      this.sixthFrameStopAnimation.next();
      this.eightFrameStopAnimation.next();
      this.nineFrameStopAnimation.next();
      this.tenFrameStopAnimation.next();
    } else if (parent.top <= -11000 && parent.top > -12000) {
      this.setFramesDisplay(4);
      this.secondFrameStopAnimation.next();
      this.fourthFrameStartAnimation.next();
      this.sixthFrameStopAnimation.next();
      this.eightFrameStopAnimation.next();
      this.nineFrameStopAnimation.next();
      this.tenFrameStopAnimation.next();
    } else if (parent.top <= -12000 && parent.top > -15000) {
      this.setFramesDisplay(5);
      this.secondFrameStopAnimation.next();
      this.fourthFrameStopAnimation.next();
      this.sixthFrameStartAnimation.next();
      this.eightFrameStopAnimation.next();
      this.nineFrameStopAnimation.next();
      this.tenFrameStopAnimation.next();
    } else if (parent.top <= -15000 && parent.top > -17000) {
      this.setFramesDisplay(6);
      if (parent.top <= -15000 && parent.top > -15500) {
        setTimeout(
          function () {
            this.sixthText.nativeElement.style.opacity = 0;
            this.sixthText.nativeElement.style.bottom = "0%";
          }.bind(this),
          20
        );
      } else if (parent.top <= -15500 && parent.top > -16500) {
        setTimeout(
          function () {
            this.sixthText.nativeElement.style.opacity = 1;
            this.sixthText.nativeElement.style.bottom = "9%";
          }.bind(this),
          20
        );
      } else if (parent.top <= -16500 && parent.top > -17000) {
        setTimeout(
          function () {
            this.sixthText.nativeElement.style.opacity = 0;
            this.sixthText.nativeElement.style.bottom = "18%";
          }.bind(this),
          20
        );
      }
      this.secondFrameStopAnimation.next();
      this.fourthFrameStartAnimation.next();
      this.sixthFrameStartAnimation.next();
      this.eightFrameStopAnimation.next();
      this.nineFrameStopAnimation.next();
      this.tenFrameStopAnimation.next();
    } else if (parent.top <= -17000 && parent.top > -20000) {
      this.setFramesDisplay(7);

      if (parent.top <= -17000 && parent.top > -17200) {
        setTimeout(
          function () {
            this.eightFrame.nativeElement.style.top = "0";
          }.bind(this),
          20
        );
      } else {
        this.eightFrame.nativeElement.style.top = "-34vw";
      }

      if (parent.top <= -17000 && parent.top > -17500) {
        setTimeout(
          function () {
            this.seventhText.nativeElement.style.opacity = 0;
            this.seventhText.nativeElement.style.bottom = "0%";
          }.bind(this),
          20
        );
      } else if (parent.top <= -17500) {
        setTimeout(
          function () {
            this.seventhText.nativeElement.style.opacity = 1;
            this.seventhText.nativeElement.style.bottom = "9%";
          }.bind(this),
          20
        );
      }

      if (parent.top <= -17000 && parent.top > -18000) {
        setTimeout(
          function () {
            this.eightText.nativeElement.style.opacity = 0;
            this.eightText.nativeElement.style.bottom = "0%";
          }.bind(this),
          20
        );
      } else if (parent.top <= -18000) {
        setTimeout(
          function () {
            this.eightText.nativeElement.style.opacity = 1;
            this.eightText.nativeElement.style.bottom = "9%";
          }.bind(this),
          20
        );
      }

      if (parent.top <= -17000 && parent.top > -18900) {
        setTimeout(
          function () {
            this.nineText.nativeElement.style.opacity = 0;
            this.nineText.nativeElement.style.bottom = "0%";
          }.bind(this),
          20
        );
      } else if (parent.top <= -18900) {
        setTimeout(
          function () {
            this.nineText.nativeElement.style.opacity = 1;
            this.nineText.nativeElement.style.bottom = "9%";
          }.bind(this),
          20
        );
      }

      this.secondFrameStopAnimation.next();
      this.fourthFrameStartAnimation.next();
      this.sixthFrameStartAnimation.next();
      this.eightFrameStartAnimation.next();
      this.nineFrameStopAnimation.next();
      this.tenFrameStopAnimation.next();
    } else if (parent.top <= -20000 && parent.top > -21200) {
      this.setFramesDisplay(8);
      this.secondFrameStopAnimation.next();
      this.fourthFrameStopAnimation.next();
      this.sixthFrameStopAnimation.next();
      this.eightFrameStopAnimation.next();
      this.nineFrameStartAnimation.next();
      this.tenFrameStopAnimation.next();
    } else if (parent.top <= -21200 && parent.top > -23000) {
      this.setFramesDisplay(9);
      this.secondFrameStopAnimation.next();
      this.fourthFrameStopAnimation.next();
      this.sixthFrameStopAnimation.next();
      this.eightFrameStopAnimation.next();
      this.nineFrameStopAnimation.next();
      this.tenFrameStartAnimation.next();
    } else if (parent.top < 0 || parent.top <= -23000) {
      this.setFramesDisplay(-1);
      this.secondFrameStopAnimation.next();
      this.fourthFrameStopAnimation.next();
      this.sixthFrameStopAnimation.next();
      this.eightFrameStopAnimation.next();
      this.nineFrameStopAnimation.next();
      this.tenFrameStopAnimation.next();
    }

    if (parent.top <= -23000) {
      this.lastFrame.nativeElement.style.display = "flex";
    } else {
      this.lastFrame.nativeElement.style.display = "none";
    }

    if (window.scrollY < this.framePositions[this.framePositions.length - 1]) {
      this.suggestionButton.nativeElement.style.display = "block";
      if(window.innerWidth < 600 && window.innerWidth < window.innerHeight) {
        this.MobileSuggestion.nativeElement.style.display = "block";
      }
    } else {
      this.suggestionButton.nativeElement.style.display = "none";
      this.MobileSuggestion.nativeElement.style.display = "none";
    }
    
    if (window.scrollY > this.firstFramePosition + 100 && window.scrollY < this.framePositions[this.framePositions.length - 1]) {
      this.suggestionButtonUp.nativeElement.style.display = "block";
    } else {
      if (this.currentFrame === this.framePositions.length - 1 && window.scrollY === this.framePositions[this.framePositions.length - 1]) {
        this.suggestionButtonUp.nativeElement.style.display = "block";
      } else {
        this.suggestionButtonUp.nativeElement.style.display = "none";
      }
    }
  }

  setCurrentFrame() {
    for (var i = 0; i < this.framePositions.length - 1; i++) {
      if (window.scrollY < this.framePositions[0]) {
        this.currentFrame = 0;
        break;
      }
      if (
        window.scrollY >= this.framePositions[i] &&
        window.scrollY < this.framePositions[i + 1]
      ) {
        this.currentFrame = i + 1;
        break;
      }
      if (
        window.scrollY >= this.framePositions[this.framePositions.length - 1]
      ) {
        this.currentFrame = this.framePositions.length - 1;
        break;
      }
    }
  }

  setFramesDisplay(blockIndex)
  {
    let i = 0;
    for(i = 0; i< this.frames.length;i++)
    {
      if(i === blockIndex)
      {
        this.frames[i].style.display = "block";
        this.activeFrameIndex = i;
      }
      else
      {
        this.frames[i].style.display = "none";
      }
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.showorHideMobileSuggestion();
    var activeContent = this.framesContent[this.activeFrameIndex];
    var activeContentRect = activeContent.getBoundingClientRect();

    if (activeContentRect.width >= window.innerWidth) {
      activeContent.classList.remove("vertical-size");
      activeContent.classList.add("horizontal-size");
    } else if (activeContentRect.height > window.innerHeight) {
      activeContent.classList.remove("horizontal-size");
      activeContent.classList.add("vertical-size");
    }

    if (activeContent.classList.contains("horizontal-size")) {
      var remainingSpaceHeight =
        (window.innerHeight - activeContentRect.height) / 2;
      this.topBackground.nativeElement.style.height =
        remainingSpaceHeight + "px";
      this.bottomBackground.nativeElement.style.height =
        remainingSpaceHeight + "px";
    } else if (activeContent.classList.contains("vertical-size")) {
      this.topBackground.nativeElement.style.height = "0px";
      this.bottomBackground.nativeElement.style.height = "0px";
    }
    this.presentationHeight = activeContentRect.height;
    this.calculateTextsTop();
    this.renderPresentation();
  }

  imgLoaded(imageRef) {
    let imgWidth = imageRef.width;
    let imgHeight = imageRef.height;
    let factor = imgWidth / imgHeight;

    if (window.innerHeight * factor > window.innerWidth) {
      imageRef.classList.remove("vertical-size");
      imageRef.classList.add("horizontal-size");
      var remainingSpaceHeight =
        (window.innerHeight - window.innerWidth / factor) / 2;
      this.topBackground.nativeElement.style.height =
        remainingSpaceHeight + "px";
      this.bottomBackground.nativeElement.style.height =
        remainingSpaceHeight + "px";
      this.presentationHeight = window.innerWidth / factor;
    } else {
      imageRef.classList.remove("horizontal-size");
      imageRef.classList.add("vertical-size");
      this.topBackground.nativeElement.style.height = "0px";
      this.bottomBackground.nativeElement.style.height = "0px";
      this.presentationHeight = imgHeight;
    }
    this.calculateTextsTop();
    this.renderPresentation();
  }

  calculateTextsTop() {
    let firstImageHeight = this.getImageHeight(
      this.firstTextImg.nativeElement,
      this.firstTextImgWidth
    );

    var firstTextTop = window.innerHeight / 2 - firstImageHeight / 2;
    this.firstText.nativeElement.style.top = firstTextTop + "px";

    var secondTextTop = firstTextTop + this.presentationHeight;
    this.secondText.nativeElement.style.top = secondTextTop + "px";

    var thirdTextTop = secondTextTop + 40;
    this.thirdText.nativeElement.style.top = thirdTextTop + "px";

    // var elevenTextTop = this.elevenText.nativeElement.getBoundingClientRect().top;
    // var lastButtonTop = elevenTextTop + 40;
    // this.lastButton.nativeElement.style.top = lastButtonTop + "px";
  }

  getImageHeight(element, width) {
    let imgWidth = element.width;
    let imgHeight = element.height;
    let factor = imgWidth / imgHeight;
    return ((width / 100) * window.innerWidth) / factor;
  }

  seeGallery() {
    this.router.navigate(["/", "BeforeAndAfter"]);
  }

  onNextClick() {
    this.setCurrentFrame();
    window.scrollTo({
      top: this.framePositions[this.currentFrame],
      left: 0,
      behavior: "smooth",
    });
  }
  onRevertClick() {
    window.scrollTo({
      top: this.firstFramePosition,
      left: 0,
      behavior: "smooth",
    });
  }
}
