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
  selector: "app-invasilign",
  templateUrl: "./invasilign.component.html",
  styleUrls: ["./invasilign.component.scss"]
})
export class InvasilignComponent implements OnInit {
  @ViewChild("openingVideo") openingVideoEl: ElementRef;

  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.title.setTitle("Invisalign Gold Coast | Levels | Costs | Experienced");
    this.meta.addTags([{
      name: 'description',
      content: `We offer different levels of Invisalign to straighten your teeth, only pay for what you need or want, starting from $2850. Book your Free Assessment now.`
    }, { name: 'keywords', content: 'invisalign gold coast, invisalign teeth straightening, invisalign braces gold coast' }]);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.openingVideoEl.nativeElement.muted = true;
    this.openingVideoEl.nativeElement.style.display = "block";
  }

  seeAllFinancial() {
    this.router.navigate(["/", "PaymentPage"]);
  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {
    let playPromise1;
    if (ScrollTrigger.isInViewport(this.openingVideoEl.nativeElement)) {
      playPromise1 = this.openingVideoEl.nativeElement.play();
    }
    else {
      if (playPromise1 !== undefined) {
        playPromise1.then(_ => {
          this.openingVideoEl.nativeElement.pause();
        })
        .catch(error => {
        });
      }
    }
  }
}
