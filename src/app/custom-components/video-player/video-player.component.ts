import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.scss"]
})
export class VideoPlayerComponent implements OnInit {
  private elRef: ElementRef;
  private renderer: Renderer2;

  @Input() text: string;
  @Input() videoSource: string;

  @ViewChild("proudVideo") video: ElementRef;

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number = 300;
  color: string = "blue";

  constructor(el: ElementRef, renderer: Renderer2) {
    this.elRef = el;
    this.renderer = renderer;
    this.color = "red";
  }

  fullscreenChangeHandler(event) {
    let elem = event.target;
    let isFullscreen = document.fullscreenElement === elem;
    if (!isFullscreen) {
      elem.style.display = "none";
    }
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.video.nativeElement.style.display = "none";
    if (typeof this.video.nativeElement.onfullscreenchange != "undefined") {
      this.video.nativeElement.onfullscreenchange = this.fullscreenChangeHandler;
    } else {
      this.video.nativeElement.onwebkitfullscreenchange = this.fullscreenChangeHandler;
    }
  }

  playVideo() {
    let video = this.video.nativeElement;
    video.style.display = "block";
    video.setAttribute("controls", "controls");
    if (typeof video.requestFullscreen != "undefined") {
      video.requestFullscreen();
    } else {
      video.webkitRequestFullScreen();
    }
    video.play();
  }
}
