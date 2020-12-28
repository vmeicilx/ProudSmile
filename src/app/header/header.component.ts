import { Clipboard } from "@angular/cdk/clipboard";
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild
} from "@angular/core";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from "@angular/material/snack-bar";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  private elRef: ElementRef;
  private renderer: Renderer2;
  styleStatus: boolean = true;
  currentRoute: string;
  isMouseOn: boolean = false;
  scheduleActive: boolean = false;
  isWhyProudSmile: boolean = false;
  isHealth: boolean = false;
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  scheduleText: string;

  @ViewChild("whyProudSmile") whyProudSmileSubheader: ElementRef;
  @ViewChild("health1Subheader") health1Subheader: ElementRef;
  @ViewChild("health2Subheader") health2Subheader: ElementRef;
  @ViewChild("WhyProudSmileText") whyProudSmileText: ElementRef;
  @ViewChild("HealthText") healthText: ElementRef;
  @ViewChild("AestheticsText") aestheticsText: ElementRef;
  @ViewChild("ImplantsText") implantsText: ElementRef;
  @ViewChild("PaymentPlanText") paymentPlanText: ElementRef;
  @ViewChild("SpecialsText") specialsText: ElementRef;
  @ViewChild("ContactText") contactText: ElementRef;

  constructor(
    private router: Router,
    el: ElementRef,
    renderer: Renderer2,
    private clipboard: Clipboard,
    private _snackBar: MatSnackBar
  ) {
    this.elRef = el;
    this.renderer = renderer;

    router.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        this.styleStatus = val.url === "/HomePage" || val.url === "/";

        this.isWhyProudSmile =
          val.url === "/proud-smile-experience-component" ||
          val.url === "/who-we-are-component" ||
          val.url === "/dental-clinic-component";

        this.isHealth =
          val.url === "/AnxiousPatients" ||
          val.url === "/ClearBraces" ||
          val.url === "/DentalEmergency" ||
          val.url === "/DVA" ||
          val.url === "/Extractions" ||
          val.url === "/GeneralAndPreventiveCare" ||
          val.url === "/Invisalign" ||
          val.url === "/MedicareChildBenefitScheme" ||
          val.url === "/MouthguardsAndSplints" ||
          val.url === "/RootCanalTherapy" ||
          val.url === "/SameDayCrowns";

        this.whyProudSmileText.nativeElement.classList.remove("active-text");
        this.healthText.nativeElement.classList.remove("active-text");
        this.aestheticsText.nativeElement.classList.remove("active-text");
        this.implantsText.nativeElement.classList.remove("active-text");
        this.paymentPlanText.nativeElement.classList.remove(
          "payment-plan-active"
        );
        this.specialsText.nativeElement.classList.remove("active-text");
        this.contactText.nativeElement.classList.remove("active-text");

        if (val.url === "/proud-smile-experience-component") {
          this.setActiveSubheader1(0);
          this.whyProudSmileText.nativeElement.classList.add("active-text");
        }
        if (val.url === "/who-we-are-component") {
          this.setActiveSubheader1(1);
          this.whyProudSmileText.nativeElement.classList.add("active-text");
        }
        if (val.url === "/dental-clinic-component") {
          this.setActiveSubheader1(2);
          this.whyProudSmileText.nativeElement.classList.add("active-text");
        }

        if (val.url === "/Extractions") {
          this.setActiveSubheader2(0);
          this.healthText.nativeElement.classList.add("active-text");
        }
        if (val.url === "/RootCanalTherapy") {
          this.setActiveSubheader2(1);
          this.healthText.nativeElement.classList.add("active-text");
        }
        if (val.url === "/ClearBraces") {
          this.setActiveSubheader2(2);
          this.healthText.nativeElement.classList.add("active-text");
        }
        if (val.url === "/Invisalign") {
          this.setActiveSubheader2(3);
          this.healthText.nativeElement.classList.add("active-text");
        }
        if (val.url === "/AnxiousPatients") {
          this.setActiveSubheader2(4);
          this.healthText.nativeElement.classList.add("active-text");
        }
        if (val.url === "/SameDayCrowns") {
          this.setActiveSubheader2(5);
          this.healthText.nativeElement.classList.add("active-text");
        }

        if (val.url === "/GeneralAndPreventiveCare") {
          this.setActiveSubheader3(0);
          this.healthText.nativeElement.classList.add("active-text");
        }
        if (val.url === "/DVA") {
          this.setActiveSubheader3(1);
          this.healthText.nativeElement.classList.add("active-text");
        }
        if (val.url === "/MedicareChildBenefitScheme") {
          this.setActiveSubheader3(2);
          this.healthText.nativeElement.classList.add("active-text");
        }
        if (val.url === "/MouthguardsAndSplints") {
          this.setActiveSubheader3(3);
          this.healthText.nativeElement.classList.add("active-text");
        }
        if (val.url === "/DentalEmergency") {
          this.setActiveSubheader3(4);
          this.healthText.nativeElement.classList.add("active-text");
        }

        if (val.url === "/aesthetics-component") {
          this.aestheticsText.nativeElement.classList.add("active-text");
        }

        if (val.url === "/Implants") {
          this.implantsText.nativeElement.classList.add("active-text");
        }

        if (val.url === "/payment-page-component") {
          this.paymentPlanText.nativeElement.classList.add(
            "payment-plan-active"
          );
        }

        if (val.url === "/Specials") {
          this.specialsText.nativeElement.classList.add("active-text");
        }

        if (val.url === "/contact-page-component") {
          this.contactText.nativeElement.classList.add("active-text");
        }
      }
    });
  }

  setActiveSubheader1(index: number) {
    for (
      var i = 0;
      i < this.elRef.nativeElement.children[3].children[0].children.length;
      i++
    ) {
      this.elRef.nativeElement.children[3].children[0].children[
        i
      ].classList.remove("active");
    }
    this.elRef.nativeElement.children[3].children[0].children[
      index
    ].classList.add("active");
  }

  setActiveSubheader2(index: number) {
    for (
      var i = 0;
      i < this.elRef.nativeElement.children[4].children[0].children.length;
      i++
    ) {
      this.elRef.nativeElement.children[4].children[0].children[
        i
      ].classList.remove("active");
    }
    for (
      var i = 0;
      i < this.elRef.nativeElement.children[4].children[1].children.length;
      i++
    ) {
      this.elRef.nativeElement.children[4].children[1].children[
        i
      ].classList.remove("active");
    }
    this.elRef.nativeElement.children[4].children[0].children[
      index
    ].classList.add("active");
  }

  setActiveSubheader3(index: number) {
    for (
      var i = 0;
      i < this.elRef.nativeElement.children[4].children[0].children.length;
      i++
    ) {
      this.elRef.nativeElement.children[4].children[0].children[
        i
      ].classList.remove("active");
    }
    for (
      var i = 0;
      i < this.elRef.nativeElement.children[4].children[1].children.length;
      i++
    ) {
      this.elRef.nativeElement.children[4].children[1].children[
        i
      ].classList.remove("active");
    }
    this.elRef.nativeElement.children[4].children[1].children[
      index
    ].classList.add("active");
  }

  ngOnInit(): void {
    var today = new Date();
    var day = today.getDay();
    if (day === 1) {
      this.scheduleText = "Today 8:30am - 5:30pm Tuesday 8:30am - 7:00pm";
    }
    if (day === 2) {
      this.scheduleText = "Today 8:30am - 7:00pm Wednesday 8:30am - 6:30pm";
    }
    if (day === 3) {
      this.scheduleText = "Today 8:30am - 6:30pm Thurdsay 8:30am - 5:30pm";
    }
    if (day === 4) {
      this.scheduleText = "Today 8:30am - 5:30pm Friday 8:30am - 5:30pm";
    }
    if (day === 5) {
      this.scheduleText = "Today 8:30am - 5:30pm Saturday and Sunday closed";
    }
    if (day === 6) {
      this.scheduleText = "Today closed Monday 8:30am - 5:30pm";
    }
    if (day === 0) {
      this.scheduleText = "Today closed Monday 8:30am - 5:30pm";
    }
  }

  onLogoClick() {
    this.styleStatus = true;
    this.router.navigate(["/", "HomePage"]);
    window.scrollTo(0, 0);
  }

  onMenuItemClick(item: string) {
    this.router.navigate(["/", item]);
    this.styleStatus = window.pageYOffset <= 5 && item === "HomePage";
    window.scrollTo(0, 0);
  }

  @HostListener("window:scroll", ["$event"])
  onScroll(event) {
    this.styleStatus =
      window.pageYOffset <= 5 &&
      this.router.url === "/HomePage" &&
      !this.isMouseOn;
  }

  mouseEnter() {
    this.styleStatus = false;
    this.isMouseOn = true;
    this.whyProudSmileSubheader.nativeElement.children[0].classList.add(
      "fixed-position"
    );
    this.health1Subheader.nativeElement.classList.add("fixed-health-position");
    this.health2Subheader.nativeElement.classList.add("fixed-health-position");
    this.health2Subheader.nativeElement.classList.add("health2-fixed-position");
  }

  mouseLeave() {
    this.isMouseOn = false;
    this.styleStatus =
      window.pageYOffset <= 5 &&
      this.router.url === "/HomePage" &&
      !this.scheduleActive;
  }

  subheadermouseLeave() {
    this.whyProudSmileSubheader.nativeElement.children[0].classList.remove(
      "fixed-position"
    );
    this.health1Subheader.nativeElement.classList.remove(
      "fixed-health-position"
    );
    this.health2Subheader.nativeElement.classList.remove(
      "fixed-health-position"
    );
    this.health2Subheader.nativeElement.classList.remove(
      "health2-fixed-position"
    );
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
  goToLinkWithotNewTab(url: string) {
    window.open(url, "_self");
  }

  copyNumber() {
    this.clipboard.copy("0755703311");

    this._snackBar.open("07 5570 3311 copied to clipboard!", "", {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

  onClick(event, item: string) {
    var target = event.currentTarget;
    for (var i = 0; i < target.parentElement.length; i++) {
      target.parentElement.children[i].classList.remove("active");
    }
    target.classList.add("active");

    this.router.navigate(["/", item]);
    window.scrollTo(0, 0);
  }

  menuOpened() {
    this.scheduleActive = true;
  }
  menuClosed() {
    this.scheduleActive = false;
  }
}
