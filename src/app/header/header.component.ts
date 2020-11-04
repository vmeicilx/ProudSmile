import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from "@angular/core";
import {  NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  private elRef: ElementRef;
  private renderer: Renderer2;
  styleStatus: boolean = true;
  currentRoute: string;
  isMouseOn: boolean = false;
  isWhyProudSmile: boolean = false;

  constructor(private router: Router, el: ElementRef, renderer: Renderer2) {
    this.elRef = el;
    this.renderer = renderer;

    router.events.subscribe((val) => {
      // see also 
      if(val instanceof NavigationEnd)
      {
        this.styleStatus = val.url === "/home-page-component" || val.url === "/";
        console.log("6", val.url);
        this.isWhyProudSmile = val.url === "/proud-smile-experience-component" || val.url === "/who-we-are-component" || val.url === "/dental-clinic-component";

        if(val.url === "/proud-smile-experience-component")
        {
          for (var i = 0; i < this.elRef.nativeElement.children[2].children[0].children.length; i++) {
            this.elRef.nativeElement.children[2].children[0].children[i].classList.remove('active');
          }
          this.elRef.nativeElement.children[2].children[0].children[0].classList.add('active');
        }
        if(val.url === "/who-we-are-component")
        {
          for (var i = 0; i < this.elRef.nativeElement.children[2].children[0].children.length; i++) {
            this.elRef.nativeElement.children[2].children[0].children[i].classList.remove('active');
          }
          this.elRef.nativeElement.children[2].children[0].children[1].classList.add('active');
        }
        if(val.url === "/dental-clinic-component")
        {
          for (var i = 0; i < this.elRef.nativeElement.children[2].children[0].children.length; i++) {
            this.elRef.nativeElement.children[2].children[0].children[i].classList.remove('active');
          }
          this.elRef.nativeElement.children[2].children[0].children[2].classList.add('active');
        }
      }
  });
  }

  ngOnInit(): void {}

  onLogoClick() {
    this.styleStatus = true;
    console.log("1", this.styleStatus);
    this.router.navigate(["/", "home-page-component"]);
    window.scrollTo(0, 0)
  }

  onMenuItemClick(item: string) {
    this.router.navigate(["/", item]);
    this.styleStatus = window.pageYOffset <= 5 && item === "home-page-component";
    console.log("2", this.styleStatus);
    window.scrollTo(0, 0)
  }

  @HostListener("window:scroll", ["$event"])
  onScroll(event) {
    this.styleStatus = window.pageYOffset <= 5 && this.router.url === "/home-page-component" && !this.isMouseOn;
    console.log("3", this.styleStatus);
  }

  mouseEnter() {
    this.styleStatus = false;
    console.log("4", this.styleStatus);
    this.isMouseOn = true;
  }

  mouseLeave() {
    this.isMouseOn = false;
    this.styleStatus = window.pageYOffset <= 5 && this.router.url === "/home-page-component";
    console.log("5", this.styleStatus);
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  onClick(event, item: string)
  {
    for (var i = 0; i < this.elRef.nativeElement.children[2].children[0].children.length; i++) {
      this.elRef.nativeElement.children[2].children[0].children[i].classList.remove('active');
    }
    var target = event.currentTarget;
    target.classList.add("active");
    
    this.router.navigate(["/", item]);
    window.scrollTo(0, 0)
  }
}
