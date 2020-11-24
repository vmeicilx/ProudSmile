import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Renderer2,
  HostListener
} from "@angular/core";
import {
  VgApiService,
  VgPlayerComponent
} from "@videogular/ngx-videogular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  private elRef: ElementRef;
  private renderer: Renderer2;
  vg: VgApiService;
  @ViewChild(VgPlayerComponent) vgPlayer: VgPlayerComponent;

  imageObject: Array<object> = [
    {
      image: "../../../assets/homePage/instaFeed/1.png",
      thumbImage: "../../../assets/homePage/instaFeed/1.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/2.png",
      thumbImage: "../../../assets/homePage/instaFeed/2.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/3.png",
      thumbImage: "../../../assets/homePage/instaFeed/3.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/4.png",
      thumbImage: "../../../assets/homePage/instaFeed/4.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/5.png",
      thumbImage: "../../../assets/homePage/instaFeed/5.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/6.png",
      thumbImage: "../../../assets/homePage/instaFeed/6.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/7.png",
      thumbImage: "../../../assets/homePage/instaFeed/7.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/8.png",
      thumbImage: "../../../assets/homePage/instaFeed/8.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/9.png",
      thumbImage: "../../../assets/homePage/instaFeed/9.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/10.png",
      thumbImage: "../../../assets/homePage/instaFeed/10.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/11.png",
      thumbImage: "../../../assets/homePage/instaFeed/11.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/12.png",
      thumbImage: "../../../assets/homePage/instaFeed/12.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/13.png",
      thumbImage: "../../../assets/homePage/instaFeed/13.png"
    }
  ];

  constructor(el: ElementRef, renderer: Renderer2, private router: Router) {
    this.elRef = el;
    this.renderer = renderer;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.vgPlayer.fsAPI.onChangeFullscreen.subscribe((event) => {
      if (event) {
        this.vgPlayer.elem.style.display = "block";
      } else {
        this.vgPlayer.elem.style.display = "none";
      }
    });
    this.vgPlayer.elem.style.display = "none";
  }

  seeAllHealth() {
    this.router.navigate(["/", "health-component"]);
  }

  seeAllAesthetic() {
    this.router.navigate(["/", "aesthetics-component  "]);
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  onPlayerReady(api: VgApiService) {
    this.vg = api;
  }

  fullscreen() {
    this.vg.fsAPI.toggleFullscreen();
  }
}
