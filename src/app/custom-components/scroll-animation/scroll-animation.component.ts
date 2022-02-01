import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { gsap } from 'gsap';

@Component({
  selector: "app-scroll-animation",
  templateUrl: "./scroll-animation.component.html",
  styleUrls: ["./scroll-animation.component.scss"],
})
export class ScrollAnimationComponent implements OnInit {
  @ViewChild("ScrollCanvas") scrollCanvas: ElementRef;
  constructor() {}

  ngOnInit(): void {
  }

  
  ngAfterViewInit() {
    console.clear();

    const canvas = this.scrollCanvas.nativeElement;
    const context = canvas.getContext("2d");

    canvas.width = 1158;
    canvas.height = 770;

    const frameCount = 147;
    const currentFrame = (index) =>
      `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(
        index + 1
      )
        .toString()
        .padStart(4, "0")}.jpg`;

    const images: HTMLImageElement[] = [];
    const airpods = {
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    gsap.to(airpods, {
      frame: frameCount - 1,
      scrollTrigger: {
        scrub: 0.5,
      },
      onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
    });

    images[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[airpods.frame], 0, 0);
    }
  }
}
