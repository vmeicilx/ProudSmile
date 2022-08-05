import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-root-canal-therapy",
  templateUrl: "./root-canal-therapy.component.html",
  styleUrls: ["./root-canal-therapy.component.scss"]
})
export class RootCanalTherapyComponent implements OnInit {
  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.title.setTitle("Painless Root Canal Gold Coast – What to expect");
    this.meta.addTags([{
      name: 'description',
      content: `Root canal therapy effectively provides pain relief in as little as one visit. Book your appointment today. Payment Plans Available.`
    }, { name: 'keywords', content: 'root canal treatment, root canal therapy, root canal specialist gold coast' }]);
  }

  @ViewChild("rootCanalVideo") video: ElementRef;
  @ViewChild("teethVideo") teeth: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.video.nativeElement.muted = true;
    this.teeth.nativeElement.muted = true;
    this.video.nativeElement.style.display = "block";
    this.video.nativeElement.playbackRate = 0.4;
    this.teeth.nativeElement.play();
  }

  seeAllFinancial() {
    this.router.navigate(["/", "payment-page-component"]);
  }

  onCrownsClick() {
    this.router.navigate(["/", "SameDayCrowns"]);
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {
    let playPromise1;
    if (ScrollTrigger.isInViewport(this.video.nativeElement)) {
      playPromise1 = this.video.nativeElement.play();
    }
    else {
      if (playPromise1 !== undefined) {
        playPromise1.then(_ => {
          this.video.nativeElement.pause();
        })
        .catch(error => {
        });
      }
    }

    let playPromise2;
    if (ScrollTrigger.isInViewport(this.teeth.nativeElement)) {
      playPromise2 = this.teeth.nativeElement.play();
    }
    else {
      if (playPromise2 !== undefined) {
        playPromise2.then(_ => {
          this.teeth.nativeElement.pause();
        })
        .catch(error => {
        });
      }
    }
  }
}
