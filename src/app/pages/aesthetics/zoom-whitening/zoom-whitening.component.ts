import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ScrollFramerSectionComponent } from 'src/app/custom-components/scroll-framer-section/scroll-framer-section.component';

@Component({
  selector: 'app-zoom-whitening',
  templateUrl: './zoom-whitening.component.html',
  styleUrls: ['./zoom-whitening.component.scss']
})
export class ZoomWhiteningComponent implements OnInit {

  @ViewChild("LoadingText") loadingText: ElementRef;
  @ViewChild("Zoom") zoom: ElementRef;
  @ViewChild("AnimContainer") animContainer: ElementRef;
  @ViewChild("PresentationView") presentationView: ElementRef;
  @ViewChild("BookButton") bookButton: ElementRef;
  
  @ViewChild("FirstFrame") firstFrame: ElementRef;
  @ViewChild("SecondFrame") secondFrame: ElementRef;
  @ViewChild("LastFrame") lastFrame: ElementRef;
  
  @ViewChild("FirstFrameImg") firstFrameImg: ElementRef;
  @ViewChild("SecondFrameVideo") secondFrameVideo: ScrollFramerSectionComponent;
  @ViewChild("LastFrameImg") lastFrameImg: ScrollFramerSectionComponent;

  frameStartAnimation: Subject<void> = new Subject<void>();
  frameStopAnimation: Subject<void> = new Subject<void>();

  @ViewChild("SuggestionButton") suggestionButton: ElementRef;
  @ViewChild("SuggestionButtonUp") suggestionButtonUp: ElementRef;
  
  @ViewChild("HelperText") HelperText: ElementRef;
  @ViewChild("DownArrow") DownArrow: ElementRef;

  currentFrame = 0;
  framePositions = [2000, 3300, 5500, 7100, 9100];
  firstFramePosition = 900;

  sections = 0;

  activeFrameIndex = 0;

  frames = [];
  framesContent = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.frames = [this.firstFrame.nativeElement, this.secondFrame.nativeElement];

    this.framesContent = [this.firstFrameImg.nativeElement, this.secondFrameVideo.scrollCanvas.nativeElement];
  }

  showExploreButton() {
    this.sections += 1;

    if(this.sections === 1) {

      this.loadingText.nativeElement.style.display = "none";
      this.zoom.nativeElement.style.display = "block";
      
      window.scrollTo(0, 0)
      setTimeout(function () {
        window.scrollTo(0, 0)
      }.bind(this), 20);
    }
  }

  seeUltraThin() {
    this.router.navigate(["/", "UltraThinVeneers"]);
    window.scrollTo(0, 0);
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {
    this.renderPresentation();
  }

  renderPresentation()
  {
    let parent = this.presentationView.nativeElement.parentElement.getBoundingClientRect();
    if(parent.top < 0 && parent.top >= -10000)
    {
      this.presentationView.nativeElement.style.position = "fixed";
      this.presentationView.nativeElement.style.top = "0px";
    }
    else
    {
      this.presentationView.nativeElement.style.position = "relative";
      this.presentationView.nativeElement.style.top = "unset";
    }

    if(parent.top < 0 && parent.top > -200)
    {
      this.setFramesDisplay(0);
      this.frameStopAnimation.next();
    }
    else if(parent.top <= -200 && parent.top > -10000) {
      this.setFramesDisplay(1);
      this.frameStartAnimation.next();
    }
    else if(parent.top < 0 || parent.top <= -10000) {

      this.setFramesDisplay(-1);
      this.frameStopAnimation.next();
    }

    if(parent.top <= -8000 && parent.top > -10000)
    {
      this.bookButton.nativeElement.style.position = "fixed";
      this.bookButton.nativeElement.style.display = "block";
    }
    else
    {
      this.bookButton.nativeElement.style.position = "absolute";
    }

    if(parent.top <= -10000)
    {
      this.lastFrame.nativeElement.style.display = "block";
    }
    else
    {
      this.lastFrame.nativeElement.style.display = "none";
    }
    
    
    if (window.scrollY < this.framePositions[this.framePositions.length - 1]) {
      this.suggestionButton.nativeElement.style.display = "block";
    } else {
      this.suggestionButton.nativeElement.style.display = "none";
    }
    
    if (window.scrollY > this.firstFramePosition + 500 && window.scrollY < this.framePositions[this.framePositions.length - 1]) {
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
    for(var i = 0; i < this.framePositions.length-1; i++)
    {
      if(window.scrollY < this.framePositions[0]) {
        this.currentFrame = 0;
        break;
      }
      if(window.scrollY>=this.framePositions[i] && window.scrollY < this.framePositions[i+1]) {
        this.currentFrame = i+1;
        break;
      }
      if(window.scrollY >= this.framePositions[this.framePositions.length-1]) {
        this.currentFrame = this.framePositions.length-1;
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
    var activeContent = this.framesContent[this.activeFrameIndex];
    var activeContentRect = activeContent.getBoundingClientRect();

    if(activeContentRect.width >= window.innerWidth)
    {
      activeContent.classList.remove("vertical-size");
      activeContent.classList.add("horizontal-size");
    }
    else if(activeContentRect.height > window.innerHeight)
    {
      activeContent.classList.remove("horizontal-size");
      activeContent.classList.add("vertical-size");
    }

    this.renderPresentation();
  }

  imgLoaded(imageRef){
    let imgWidth = imageRef.width;
    let imgHeight = imageRef.height;
    let factor = imgWidth / imgHeight;

    if(window.innerHeight * factor > window.innerWidth)
    {
      imageRef.classList.remove("vertical-size");
      imageRef.classList.add("horizontal-size");
    }
    else 
    {
      imageRef.classList.remove("horizontal-size");
      imageRef.classList.add("vertical-size");
    }
    this.renderPresentation();
  }

  getImageHeight(element, width) {
    let imgWidth = element.width;
    let imgHeight = element.height;
    let factor = imgWidth / imgHeight;
    return (width / 100) * window.innerWidth / factor;
  }
  onNextClick() {
    this.setCurrentFrame();
    window.scrollTo({
      top: this.framePositions[this.currentFrame],
      left: 0,
      behavior: 'smooth'
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
