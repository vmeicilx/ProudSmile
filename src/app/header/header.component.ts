import { Clipboard } from "@angular/cdk/clipboard";
import {
  ApplicationRef,
  Component,
  ElementRef,
  HostListener,
  Injector,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
import { NavigationEnd, Router } from "@angular/router";
import { DataService } from "../shared/data-service";


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
  scheduleActive: boolean = false;
  isWhyProudSmile: boolean = false;
  isBundallPage: boolean = false;
  isPacificPage: boolean = false;
  isHealth: boolean = false;
  isImplants: boolean = false;
  isAesthetics: boolean = false;
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  appElementRef: ElementRef;

  @ViewChild("whyProudSmile") whyProudSmileSubheader: ElementRef;
  @ViewChild("implants") implantsSubheader: ElementRef;
  @ViewChild("health1Subheader") health1Subheader: ElementRef;
  @ViewChild("health2Subheader") health2Subheader: ElementRef;
  @ViewChild("aesthetics") aestheticsSubheader: ElementRef;
  @ViewChild("WhyProudSmileText") whyProudSmileText: ElementRef;
  @ViewChild("HealthText") healthText: ElementRef;
  @ViewChild("AestheticsText") aestheticsText: ElementRef;
  @ViewChild("ImplantsText") implantsText: ElementRef;
  @ViewChild("PaymentPlanText") paymentPlanText: ElementRef;
  @ViewChild("SpecialsText") specialsText: ElementRef;
  @ViewChild("ContactText") contactText: ElementRef;
  @ViewChild("CalculatorOverlay") calculatorOverlay: ElementRef;
  @ViewChild("CalculatorOverlayMobile") calculatorOverlayMobile: ElementRef;
  @ViewChild("hItem") hItem: ElementRef;

  @ViewChild("input1Mini") input1: ElementRef;
  @ViewChild("input2Mini") input2: ElementRef;
  @ViewChild("input3Mini") input3: ElementRef;
  @ViewChild("pointerMini") pointer: ElementRef;
  @ViewChild("ThreeDots") threeDots: ElementRef;
  @ViewChild("CloseThreeDots") closeThreeDots: ElementRef;

  @ViewChild("WhyProudSmileMenus") WhyProudSmileMenus: ElementRef;
  @ViewChild("WhyProudSmileMenusWrapper") WhyProudSmileMenusWrapper: ElementRef;
  @ViewChild("WhyProudSmileMenusLine") WhyProudSmileMenusLine: ElementRef;
  @ViewChild("WhyProudSmileMenusArrow") WhyProudSmileMenusArrow: ElementRef;
  @ViewChild("WhyProudSmileParentText") WhyProudSmileParentText: ElementRef;

  @ViewChild("HealthMenus") HealthMenus: ElementRef;
  @ViewChild("HealthMenusWrapper") HealthMenusWrapper: ElementRef;
  @ViewChild("HealthMenusLine") HealthMenusLine: ElementRef;
  @ViewChild("HealthMenusArrow") HealthMenusArrow: ElementRef;
  @ViewChild("HealthParentText") HealthParentText: ElementRef;

  @ViewChild("AestheticsMenus") AestheticsMenus: ElementRef;
  @ViewChild("AestheticsMenusWrapper") AestheticsMenusWrapper: ElementRef;
  @ViewChild("AestheticsMenusLine") AestheticsMenusLine: ElementRef;
  @ViewChild("AestheticsMenusArrow") AestheticsMenusArrow: ElementRef;
  @ViewChild("AestheticsParentText") AestheticsParentText: ElementRef;

  @ViewChild("ImplantsMenus") ImplantsMenus: ElementRef;
  @ViewChild("ImplantsMenusWrapper") ImplantsMenusWrapper: ElementRef;
  @ViewChild("ImplantsMenusLine") ImplantsMenusLine: ElementRef;
  @ViewChild("ImplantsMenusArrow") ImplantsMenusArrow: ElementRef;
  @ViewChild("ImplantsParentText") ImplantsParentText: ElementRef;

  @ViewChild("MobileOverlay") mobileOverlay: ElementRef;

  @ViewChild("MobileWhyProudSmileOverlay")
  MobileWhyProudSmileOverlay: ElementRef;
  @ViewChild("MobileWhyProudSmileMiddlePart")
  MobileWhyProudSmileMiddlePart: ElementRef;
  @ViewChild("WhyProudSmileSecondParentText")
  WhyProudSmileSecondParentText: ElementRef;
  @ViewChild("WhyProudSmileSecondMenusArrow")
  WhyProudSmileSecondMenusArrow: ElementRef;
  @ViewChild("WhyProudSmileSecondMenus") WhyProudSmileSecondMenus: ElementRef;
  @ViewChild("WhyProudSmileSecondMenusWrapper")
  WhyProudSmileSecondMenusWrapper: ElementRef;
  @ViewChild("WhyProudSmileSecondParentLine")
  WhyProudSmileSecondParentLine: ElementRef;
  @ViewChild("WhyProudSmileSecondMenusFirstText")
  WhyProudSmileSecondMenusFirstText: ElementRef;
  @ViewChild("WhyProudSmileSecondMenusSecondText")
  WhyProudSmileSecondMenusSecondText: ElementRef;
  @ViewChild("WhyProudSmileSecondMenusThirdText")
  WhyProudSmileSecondMenusThirdText: ElementRef;
  @ViewChild("WhyProudSmileSecondMenusFourthText")
  WhyProudSmileSecondMenusFourthText: ElementRef;

  @ViewChild("MobileHealthOverlay") MobileHealthOverlay: ElementRef;
  @ViewChild("MobileHealthMiddlePart") MobileHealthMiddlePart: ElementRef;
  @ViewChild("HealthSecondParentText") HealthSecondParentText: ElementRef;
  @ViewChild("HealthSecondMenusArrow") HealthSecondMenusArrow: ElementRef;
  @ViewChild("HealthSecondMenus") HealthSecondMenus: ElementRef;
  @ViewChild("HealthSecondMenusWrapper") HealthSecondMenusWrapper: ElementRef;
  @ViewChild("HealthSecondParentLine") HealthSecondParentLine: ElementRef;
  @ViewChild("HealthSecondMenusFirstText")
  HealthSecondMenusFirstText: ElementRef;
  @ViewChild("HealthSecondMenusSecondText")
  HealthSecondMenusSecondText: ElementRef;
  @ViewChild("HealthSecondMenusThirdText")
  HealthSecondMenusThirdText: ElementRef;
  @ViewChild("HealthSecondMenusFourthText")
  HealthSecondMenusFourthText: ElementRef;
  @ViewChild("HealthSecondMenusFifthText")
  HealthSecondMenusFifthText: ElementRef;
  @ViewChild("HealthSecondMenusSixthText")
  HealthSecondMenusSixthText: ElementRef;
  @ViewChild("HealthSecondMenusSeventhText")
  HealthSecondMenusSeventhText: ElementRef;
  @ViewChild("HealthSecondMenusEightText")
  HealthSecondMenusEightText: ElementRef;
  @ViewChild("HealthSecondMenusNineText") HealthSecondMenusNineText: ElementRef;
  @ViewChild("HealthSecondMenusTenText") HealthSecondMenusTenText: ElementRef;
  @ViewChild("HealthSecondMenusElevenText")
  HealthSecondMenusElevenText: ElementRef;

  @ViewChild("MobileAestheticsOverlay") MobileAestheticsOverlay: ElementRef;
  @ViewChild("MobileAestheticsMiddlePart")
  MobileAestheticsMiddlePart: ElementRef;
  @ViewChild("AestheticsSecondParentText")
  AestheticsSecondParentText: ElementRef;
  @ViewChild("AestheticsSecondMenusArrow")
  AestheticsSecondMenusArrow: ElementRef;
  @ViewChild("AestheticsSecondMenus") AestheticsSecondMenus: ElementRef;
  @ViewChild("AestheticsSecondMenusWrapper")
  AestheticsSecondMenusWrapper: ElementRef;
  @ViewChild("AestheticsSecondParentLine")
  AestheticsSecondParentLine: ElementRef;
  @ViewChild("AestheticsSecondMenusFirstText")
  AestheticsSecondMenusFirstText: ElementRef;
  @ViewChild("AestheticsSecondMenusSecondText")
  AestheticsSecondMenusSecondText: ElementRef;
  @ViewChild("AestheticsSecondMenusThirdText")
  AestheticsSecondMenusThirdText: ElementRef;
  @ViewChild("AestheticsSecondMenusFourthText")
  AestheticsSecondMenusFourthText: ElementRef;
  @ViewChild("AestheticsSecondMenusFifthText")
  AestheticsSecondMenusFifthText: ElementRef;
  @ViewChild("AestheticsSecondMenusSixthText")
  AestheticsSecondMenusSixthText: ElementRef;

  @ViewChild("MobileImplantsOverlay")
  MobileImplantsOverlay: ElementRef;
  @ViewChild("MobileImplantsMiddlePart")
  MobileImplantsMiddlePart: ElementRef;
  @ViewChild("ImplantsSecondParentText")
  ImplantsSecondParentText: ElementRef;
  @ViewChild("ImplantsSecondMenusArrow")
  ImplantsSecondMenusArrow: ElementRef;
  @ViewChild("ImplantsSecondMenus") ImplantsSecondMenus: ElementRef;
  @ViewChild("ImplantsSecondMenusWrapper")
  ImplantsSecondMenusWrapper: ElementRef;
  @ViewChild("ImplantsSecondParentLine")
  ImplantsSecondParentLine: ElementRef;
  @ViewChild("ImplantsSecondMenusFirstText")
  ImplantsSecondMenusFirstText: ElementRef;
  @ViewChild("ImplantsSecondMenusSecondText")
  ImplantsSecondMenusSecondText: ElementRef;
  @ViewChild("ImplantsSecondMenusThirdText")
  ImplantsSecondMenusThirdText: ElementRef;

  pointerGrabbed: boolean = false;
  mousePosition: number;
  initialPointerPosition: number;
  depositNumber: number;
  monthly: number = 62.5;
  weekly: number = 15.63;
  whyProudSmileActiveText: string = "The Proud Smile Experience";
  healthActiveText = "General and Preventive Care";
  aestheticsActiveText: string = "Porcelain Veneers";
  implantsActiveText: string = "Single Tooth";

  constructor(
    private router: Router,
    el: ElementRef,
    renderer: Renderer2,
    private clipboard: Clipboard,
    private _snackBar: MatSnackBar,
    private data: DataService
  ) {
    this.elRef = el;
    this.renderer = renderer;

    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        this.styleStatus = val.url === "/HomePage" || val.url === "/";

        this.isBundallPage = val.url === "/LandingBundall";
        this.isPacificPage = val.url === "/LandingPacific";

        if(val.url==="/Proudsmileopenday") {
          var header = document.getElementsByTagName("app-header") as HTMLCollectionOf<HTMLElement>;
          if(header && header[0]) {
            header[0].style.display = "none";
          }
      
          
          var footer = document.getElementsByTagName("app-footer") as HTMLCollectionOf<HTMLElement>;
          if(footer && footer[0]) {
            footer[0].style.display = "none";
          }
        }
        else {
          var header = document.getElementsByTagName("app-header") as HTMLCollectionOf<HTMLElement>;
          if(header && header[0]) {
            header[0].style.display = null;
          }
      
          
          var footer = document.getElementsByTagName("app-footer") as HTMLCollectionOf<HTMLElement>;
          if(footer && footer[0]) {
            footer[0].style.display = null;
          }
        }

        this.isWhyProudSmile =
          val.url === "/proud-smile-experience-component" ||
          val.url === "/who-we-are-component" ||
          val.url === "/dental-clinic-component"||
          val.url === "/Blog";

        this.isImplants =
          val.url === "/SingleTooth" ||
          val.url === "/FullArchRehabilitation" ||
          val.url === "/ImplantDentures";

        this.isAesthetics =
          val.url === "/PorcelainVeneers" ||
          val.url === "/UltraThinVeneers" ||
          val.url === "/SameDayVeneers" ||
          val.url === "/InvisalignVeneer" ||
          val.url === "/ZoomWhitening" ||
          val.url === "/BeforeAndAfter" ||
          val.url === "/FaceSpaFacialAesthetics";

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
        if (val.url === "/Blog") {
          this.setActiveSubheader1(3);
          this.whyProudSmileText.nativeElement.classList.add("active-text");
        }

        if (val.url === "/SingleTooth") {
          this.setActiveSubheader4(0);
          this.implantsText.nativeElement.classList.add("active-text");
        }
        if (val.url === "/FullArchRehabilitation") {
          this.setActiveSubheader4(1);
          this.implantsText.nativeElement.classList.add("active-text");
        }
        if (val.url === "/ImplantDentures") {
          this.setActiveSubheader4(2);
          this.implantsText.nativeElement.classList.add("active-text");
        }

        if (
          (val.url === "/PorcelainVeneers" && window.innerWidth > 1200) ||
          (val.url === "/UltraThinVeneers" && window.innerWidth > 1200) ||
          (val.url === "/ZoomWhitening" && window.innerWidth > 1200)
        ) {
          this.hItem.nativeElement.style.position = "relative";
          this.aestheticsSubheader.nativeElement.children[0].classList.add(
            "no-top"
          );

          if (document.documentElement.clientWidth >= 1200) {
            this.MobileAestheticsOverlay.nativeElement.classList.add("no-top");
          }
          else {
            this.MobileAestheticsOverlay.nativeElement.style.position = "relative";
            this.MobileAestheticsOverlay.nativeElement.style.top = "0px";
          }
        } else {
          this.aestheticsSubheader.nativeElement.children[0].classList.remove(
            "no-top"
          );

          if (document.documentElement.clientWidth >= 1200) {
            this.MobileAestheticsOverlay.nativeElement.classList.remove(
              "no-top"
            );
          }
          this.hItem.nativeElement.style.position = "fixed";
        }

        if (val.url === "/PorcelainVeneers") {
          this.setActiveSubheader5(0);
          this.aestheticsText.nativeElement.classList.add("active-text");
        }
        if (val.url === "/UltraThinVeneers") {
          this.setActiveSubheader5(1);
          this.aestheticsText.nativeElement.classList.add("active-text");
        }
        if (val.url === "/SameDayVeneers") {
          this.setActiveSubheader5(2);
          this.aestheticsText.nativeElement.classList.add("active-text");
        }
        if (val.url === "/ZoomWhitening") {
          this.setActiveSubheader5(3);
          this.aestheticsText.nativeElement.classList.add("active-text");
        }
        if (val.url === "/BeforeAndAfter") {
          this.setActiveSubheader5(4);
          this.aestheticsText.nativeElement.classList.add("active-text");
        }
        if (val.url === "/FaceSpaFacialAesthetics") {
          this.setActiveSubheader5(5);
          this.aestheticsText.nativeElement.classList.add("active-text");
        }

        if (val.url === "/GeneralAndPreventiveCare") {
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

        if (val.url === "/Extractions") {
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

  ngAfterViewInit(): void {
    this.depositNumber = 25;
    this.input1.nativeElement.value = 5000;
    this.input2.nativeElement.value = "25%";
    this.oninput1Mini();
    window.addEventListener("touchmove", this.preventBehavior.bind(this), {
      passive: false,
    });

    this.data.currentMessage.subscribe((message) => {
      if (!this.health1Subheader) {
        return;
      }
      if (message === "true") {
        this.hItem.nativeElement.style.position = "relative";
        this.health1Subheader.nativeElement.classList.add("no-top");
        this.health2Subheader.nativeElement.classList.add("no-top");
      } else {
        this.health1Subheader.nativeElement.classList.remove("no-top");
        this.health2Subheader.nativeElement.classList.remove("no-top");
        this.hItem.nativeElement.style.position = "fixed";
      }
    });
  }

  preventBehavior(e) {
    if (this.pointerGrabbed) {
      e.preventDefault();
    }
  }

  onChatClick() {
    // @ts-ignore: Unreachable code error
    startLiveChat();
  }

  setActiveSubheader1(index: number) {
    if (document.documentElement.clientWidth >= 1200) {
      for (
        var i = 0;
        i < this.elRef.nativeElement.children[5].children[0].children.length;
        i++
      ) {
        this.elRef.nativeElement.children[5].children[0].children[
          i
        ].classList.remove("active");
      }
      this.elRef.nativeElement.children[5].children[0].children[
        index
      ].classList.add("active");
    } else {
      this.WhyProudSmileSecondMenus.nativeElement.style.height = 0;
      this.WhyProudSmileSecondMenusArrow.nativeElement.style.transform =
        "rotate(180deg)";
      this.WhyProudSmileSecondParentLine.nativeElement.style.opacity = "0";

      this.WhyProudSmileSecondMenusFirstText.nativeElement.style.color =
        "#55311b";
      this.WhyProudSmileSecondMenusSecondText.nativeElement.style.color =
        "#55311b";
      this.WhyProudSmileSecondMenusThirdText.nativeElement.style.color =
        "#55311b";
        this.WhyProudSmileSecondMenusFourthText.nativeElement.style.color =
          "#55311b";
      if (index === 0) {
        this.WhyProudSmileSecondMenusFirstText.nativeElement.style.color =
          "#565960";
        this.whyProudSmileActiveText = "The Proud Smile Experience";
      } else if (index === 1) {
        this.WhyProudSmileSecondMenusSecondText.nativeElement.style.color =
          "#565960";
        this.whyProudSmileActiveText = "Who We Are";
      } else if (index === 2) {
        this.WhyProudSmileSecondMenusThirdText.nativeElement.style.color =
          "#565960";
        this.whyProudSmileActiveText = "Our Dental Clinic";
      } else if (index === 3) {
        this.WhyProudSmileSecondMenusFourthText.nativeElement.style.color =
          "#565960";
        this.whyProudSmileActiveText = "Our Blog";
      }
    }
  }

  setActiveSubheader2(index: number) {
    if (document.documentElement.clientWidth >= 1200) {
      for (
        var i = 0;
        i < this.elRef.nativeElement.children[6].children[0].children.length;
        i++
      ) {
        this.elRef.nativeElement.children[6].children[0].children[
          i
        ].classList.remove("active");
      }
      for (
        var i = 0;
        i < this.elRef.nativeElement.children[6].children[1].children.length;
        i++
      ) {
        this.elRef.nativeElement.children[6].children[1].children[
          i
        ].classList.remove("active");
      }
      this.elRef.nativeElement.children[6].children[0].children[
        index
      ].classList.add("active");
    } else {
      this.HealthSecondMenus.nativeElement.style.height = 0;
      this.HealthSecondMenusArrow.nativeElement.style.transform =
        "rotate(180deg)";
      this.HealthSecondParentLine.nativeElement.style.opacity = "0";

      this.HealthSecondMenusFirstText.nativeElement.style.color = "#55311b";
      this.HealthSecondMenusSecondText.nativeElement.style.color = "#55311b";
      this.HealthSecondMenusThirdText.nativeElement.style.color = "#55311b";
      if (index === 0) {
        this.HealthSecondMenusFirstText.nativeElement.style.color = "#565960";
        this.healthActiveText = "General and Preventive Care";
      } else if (index === 1) {
        this.HealthSecondMenusSecondText.nativeElement.style.color = "#565960";
        this.healthActiveText = "Root Canal Therapy";
      } else if (index === 2) {
        this.HealthSecondMenusThirdText.nativeElement.style.color = "#565960";
        this.healthActiveText = "Clear Braces";
      } else if (index === 3) {
        this.HealthSecondMenusFourthText.nativeElement.style.color = "#565960";
        this.healthActiveText = "Invisalign";
      } else if (index === 4) {
        this.HealthSecondMenusFifthText.nativeElement.style.color = "#565960";
        this.healthActiveText = "Anxious Patients";
      } else if (index === 5) {
        this.HealthSecondMenusSixthText.nativeElement.style.color = "#565960";
        this.healthActiveText = "Same Day Crowns";
      } else if (index === 6) {
        this.HealthSecondMenusSeventhText.nativeElement.style.color = "#565960";
        this.healthActiveText = "Extractions";
      } else if (index === 7) {
        this.HealthSecondMenusEightText.nativeElement.style.color = "#565960";
        this.healthActiveText = "DVA (Department of Veteren Affairs)";
      } else if (index === 8) {
        this.HealthSecondMenusNineText.nativeElement.style.color = "#565960";
        this.healthActiveText = "Medicare Childs Benefit Scheme";
      } else if (index === 9) {
        this.HealthSecondMenusTenText.nativeElement.style.color = "#565960";
        this.healthActiveText = "Mouthguards and Splints";
      } else if (index === 10) {
        this.HealthSecondMenusElevenText.nativeElement.style.color = "#565960";
        this.healthActiveText = "DentalEmergency";
      }
    }
  }

  setActiveSubheader3(index: number) {
    if (document.documentElement.clientWidth >= 1200) {
      for (
        var i = 0;
        i < this.elRef.nativeElement.children[6].children[0].children.length;
        i++
      ) {
        this.elRef.nativeElement.children[6].children[0].children[
          i
        ].classList.remove("active");
      }
      for (
        var i = 0;
        i < this.elRef.nativeElement.children[6].children[1].children.length;
        i++
      ) {
        this.elRef.nativeElement.children[6].children[1].children[
          i
        ].classList.remove("active");
      }
      this.elRef.nativeElement.children[6].children[1].children[
        index
      ].classList.add("active");
    } else {
      this.HealthSecondMenus.nativeElement.style.height = 0;
      this.HealthSecondMenusArrow.nativeElement.style.transform =
        "rotate(180deg)";
      this.HealthSecondParentLine.nativeElement.style.opacity = "0";

      this.HealthSecondMenusFirstText.nativeElement.style.color = "#55311b";
      this.HealthSecondMenusSecondText.nativeElement.style.color = "#55311b";
      this.HealthSecondMenusThirdText.nativeElement.style.color = "#55311b";
      if (index === 0) {
        this.HealthSecondMenusSeventhText.nativeElement.style.color = "#565960";
        this.healthActiveText = "Extractions";
      } else if (index === 1) {
        this.HealthSecondMenusEightText.nativeElement.style.color = "#565960";
        this.healthActiveText = "DVA (Department of Veteren Affairs)";
      } else if (index === 2) {
        this.HealthSecondMenusNineText.nativeElement.style.color = "#565960";
        this.healthActiveText = "Medicare Childs Benefit Scheme";
      } else if (index === 3) {
        this.HealthSecondMenusTenText.nativeElement.style.color = "#565960";
        this.healthActiveText = "Mouthguards and Splints";
      } else if (index === 4) {
        this.HealthSecondMenusElevenText.nativeElement.style.color = "#565960";
        this.healthActiveText = "DentalEmergency";
      }
    }
  }

  setActiveSubheader4(index: number) {
    if (document.documentElement.clientWidth >= 1200) {
      for (
        var i = 0;
        i < this.elRef.nativeElement.children[7].children[0].children.length;
        i++
      ) {
        this.elRef.nativeElement.children[7].children[0].children[
          i
        ].classList.remove("active");
      }
      this.elRef.nativeElement.children[7].children[0].children[
        index
      ].classList.add("active");
    } else {
      this.ImplantsSecondMenus.nativeElement.style.height = 0;
      this.ImplantsSecondMenusArrow.nativeElement.style.transform =
        "rotate(180deg)";
      this.ImplantsSecondParentLine.nativeElement.style.opacity = "0";

      this.ImplantsSecondMenusFirstText.nativeElement.style.color =
        "#55311b";
      this.ImplantsSecondMenusSecondText.nativeElement.style.color =
        "#55311b";
      this.ImplantsSecondMenusThirdText.nativeElement.style.color =
        "#55311b";
      if (index === 0) {
        this.ImplantsSecondMenusFirstText.nativeElement.style.color =
          "#565960";
        this.implantsActiveText = "Single Tooth";
      } else if (index === 1) {
        this.ImplantsSecondMenusSecondText.nativeElement.style.color =
          "#565960";
        this.implantsActiveText = "Full Arch Rehabilitation";
      } else if (index === 2) {
        this.ImplantsSecondMenusThirdText.nativeElement.style.color =
          "#565960";
        this.implantsActiveText = "Implant Dentures";
      }
    }
  }

  setActiveSubheader5(index: number) {
    if (document.documentElement.clientWidth >= 1200) {
      for (
        var i = 0;
        i < this.elRef.nativeElement.children[8].children[0].children.length;
        i++
      ) {
        this.elRef.nativeElement.children[8].children[0].children[
          i
        ].classList.remove("active");
      }
      this.elRef.nativeElement.children[8].children[0].children[
        index
      ].classList.add("active");
    } else {
      this.AestheticsSecondMenus.nativeElement.style.height = 0;
      this.AestheticsSecondMenusArrow.nativeElement.style.transform =
        "rotate(180deg)";
      this.AestheticsSecondParentLine.nativeElement.style.opacity = "0";

      this.AestheticsSecondMenusFirstText.nativeElement.style.color = "#55311b";
      this.AestheticsSecondMenusSecondText.nativeElement.style.color =
        "#55311b";
      this.AestheticsSecondMenusThirdText.nativeElement.style.color = "#55311b";
      if (index === 0) {
        this.AestheticsSecondMenusFirstText.nativeElement.style.color =
          "#565960";
        this.aestheticsActiveText = "Porcelain Veneers";
      } else if (index === 1) {
        this.AestheticsSecondMenusSecondText.nativeElement.style.color =
          "#565960";
        this.aestheticsActiveText = "Ultra Thin Veneers";
      } else if (index === 2) {
        this.AestheticsSecondMenusThirdText.nativeElement.style.color =
          "#565960";
        this.aestheticsActiveText = "Same Day Veneers";
      } else if (index === 3) {
        this.AestheticsSecondMenusFourthText.nativeElement.style.color =
          "#565960";
        this.aestheticsActiveText = "Zoom Whitening";
      } else if (index === 4) {
        this.AestheticsSecondMenusFifthText.nativeElement.style.color =
          "#565960";
        this.aestheticsActiveText = "Before and After";
      } else if (index === 5) {
        this.AestheticsSecondMenusSixthText.nativeElement.style.color =
          "#565960";
        this.aestheticsActiveText = "FaceSpa Facial Aesthetics";
      }
    }
  }

  ngOnInit(): void {
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

  onMenuItemClickMobile(item: string) {
    this.router.navigate(["/", item]);
    this.styleStatus = window.pageYOffset <= 5 && item === "HomePage";
    window.scrollTo(0, 0);
    this.hideOverlay();
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
    this.implantsSubheader.nativeElement.children[0].classList.add(
      "fixed-position"
    );
    this.aestheticsSubheader.nativeElement.children[0].classList.add(
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
    this.implantsSubheader.nativeElement.children[0].classList.remove(
      "fixed-position"
    );
    this.aestheticsSubheader.nativeElement.children[0].classList.remove(
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

  showOverlay() {
    this.mobileOverlay.nativeElement.style.display = "flex";
    this.threeDots.nativeElement.style.display = "none";
    this.closeThreeDots.nativeElement.style.display = "block";
    document.documentElement.style.overflowY = "hidden";
    var home = document.getElementsByTagName("app-home-page") as HTMLCollectionOf<HTMLElement>;
    if(home && home[0]) {
      home[0].style.height = "0px";
    }
    //this.elRef.nativeElement.parentElement.parentElement.parentElement.parentElement.style.overflowY = "hidden";
  }
  hideOverlay() {
    this.mobileOverlay.nativeElement.style.display = "none";
    this.threeDots.nativeElement.style.display = "block";
    this.closeThreeDots.nativeElement.style.display = "none";
    document.documentElement.style.overflowY = "scroll";
    var home = document.getElementsByTagName("app-home-page") as HTMLCollectionOf<HTMLElement>;
    if(home && home[0]) {
      home[0].style.height = null;
    }
    //this.elRef.nativeElement.parentElement.parentElement.parentElement.parentElement.style.overflowY = "scroll";
  }

  toggleWhyProudSmile() {
    if (this.WhyProudSmileMenus.nativeElement.clientHeight) {
      this.WhyProudSmileMenus.nativeElement.style.height = 0;
      this.WhyProudSmileMenusLine.nativeElement.style.display = "block";
      this.WhyProudSmileMenusArrow.nativeElement.style.transform =
        "rotate(180deg)";
      this.WhyProudSmileParentText.nativeElement.style.color = "white";
    } else {
      this.WhyProudSmileMenus.nativeElement.style.height =
        this.WhyProudSmileMenusWrapper.nativeElement.clientHeight + "px";
      this.WhyProudSmileMenusLine.nativeElement.style.display = "none";
      this.WhyProudSmileMenusArrow.nativeElement.style.transform =
        "rotate(0deg)";
      this.WhyProudSmileParentText.nativeElement.style.color = "#A7958A";
    }
  }
  toggleHealth() {
    if (this.HealthMenus.nativeElement.clientHeight) {
      this.HealthMenus.nativeElement.style.height = 0;
      this.HealthMenusLine.nativeElement.style.display = "block";
      this.HealthMenusArrow.nativeElement.style.transform = "rotate(180deg)";
      this.HealthParentText.nativeElement.style.color = "white";
    } else {
      this.HealthMenus.nativeElement.style.height =
        this.HealthMenusWrapper.nativeElement.clientHeight + "px";
      this.HealthMenusLine.nativeElement.style.display = "none";
      this.HealthMenusArrow.nativeElement.style.transform = "rotate(0deg)";
      this.HealthParentText.nativeElement.style.color = "#A7958A";
    }
  }
  toggleAesthetics() {
    if (this.AestheticsMenus.nativeElement.clientHeight) {
      this.AestheticsMenus.nativeElement.style.height = 0;
      this.AestheticsMenusLine.nativeElement.style.display = "block";
      this.AestheticsMenusArrow.nativeElement.style.transform =
        "rotate(180deg)";
      this.AestheticsParentText.nativeElement.style.color = "white";
    } else {
      this.AestheticsMenus.nativeElement.style.height =
        this.AestheticsMenusWrapper.nativeElement.clientHeight + "px";
      this.AestheticsMenusLine.nativeElement.style.display = "none";
      this.AestheticsMenusArrow.nativeElement.style.transform = "rotate(0deg)";
      this.AestheticsParentText.nativeElement.style.color = "#A7958A";
    }
  }
  toggleImplants() {
    if (this.ImplantsMenus.nativeElement.clientHeight) {
      this.ImplantsMenus.nativeElement.style.height = 0;
      this.ImplantsMenusLine.nativeElement.style.display = "block";
      this.ImplantsMenusArrow.nativeElement.style.transform = "rotate(180deg)";
      this.ImplantsParentText.nativeElement.style.color = "white";
    } else {
      this.ImplantsMenus.nativeElement.style.height =
        this.ImplantsMenusWrapper.nativeElement.clientHeight + "px";
      this.ImplantsMenusLine.nativeElement.style.display = "none";
      this.ImplantsMenusArrow.nativeElement.style.transform = "rotate(0deg)";
      this.ImplantsParentText.nativeElement.style.color = "#A7958A";
    }
  }

  toggleWhyProudSmileSecond() {
    if (this.WhyProudSmileSecondMenus.nativeElement.clientHeight) {
      this.WhyProudSmileSecondMenus.nativeElement.style.height = 0;
      this.WhyProudSmileSecondMenusArrow.nativeElement.style.transform =
        "rotate(180deg)";
      this.WhyProudSmileSecondParentLine.nativeElement.style.opacity = "0";
      document.documentElement.style.overflowY = "scroll";
    } else {
      this.WhyProudSmileSecondMenus.nativeElement.style.height =
        this.WhyProudSmileSecondMenusWrapper.nativeElement.clientHeight + "px";
      this.WhyProudSmileSecondMenusArrow.nativeElement.style.transform =
        "rotate(0deg)";
      this.WhyProudSmileSecondParentLine.nativeElement.style.opacity = "1";
      document.documentElement.style.overflowY = "hidden";
    }
  }

  toggleHealthSecond() {
    if (this.HealthSecondMenus.nativeElement.clientHeight) {
      this.HealthSecondMenus.nativeElement.style.height = 0;
      this.HealthSecondMenusArrow.nativeElement.style.transform =
        "rotate(180deg)";
      this.HealthSecondParentLine.nativeElement.style.opacity = "0";
      document.documentElement.style.overflowY = "scroll";
    } else {
      this.HealthSecondMenus.nativeElement.style.height =
        this.HealthSecondMenusWrapper.nativeElement.clientHeight + "px";
      this.HealthSecondMenusArrow.nativeElement.style.transform =
        "rotate(0deg)";
      this.HealthSecondParentLine.nativeElement.style.opacity = "1";
      document.documentElement.style.overflowY = "hidden";
    }
  }

  toggleAestheticsSecond() {
    if (this.AestheticsSecondMenus.nativeElement.clientHeight) {
      this.AestheticsSecondMenus.nativeElement.style.height = 0;
      this.AestheticsSecondMenusArrow.nativeElement.style.transform =
        "rotate(180deg)";
      this.AestheticsSecondParentLine.nativeElement.style.opacity = "0";
      document.documentElement.style.overflowY = "scroll";
    } else {
      this.AestheticsSecondMenus.nativeElement.style.height =
        this.AestheticsSecondMenusWrapper.nativeElement.clientHeight + "px";
      this.AestheticsSecondMenusArrow.nativeElement.style.transform =
        "rotate(0deg)";
      this.AestheticsSecondParentLine.nativeElement.style.opacity = "1";
      document.documentElement.style.overflowY = "hidden";
    }
  }
  toggleImplantsSecond() {
    if (this.ImplantsSecondMenus.nativeElement.clientHeight) {
      this.ImplantsSecondMenus.nativeElement.style.height = 0;
      this.ImplantsSecondMenusArrow.nativeElement.style.transform =
        "rotate(180deg)";
      this.ImplantsSecondParentLine.nativeElement.style.opacity = "0";
      document.documentElement.style.overflowY = "scroll";
    } else {
      this.ImplantsSecondMenus.nativeElement.style.height =
        this.ImplantsSecondMenusWrapper.nativeElement.clientHeight + "px";
      this.ImplantsSecondMenusArrow.nativeElement.style.transform =
        "rotate(0deg)";
      this.ImplantsSecondParentLine.nativeElement.style.opacity = "1";
      document.documentElement.style.overflowY = "hidden";
    }
  }
  copyNumber() {
    this.clipboard.copy("0755703311");

    this._snackBar.open("07 5570 3311 copied to clipboard!", "", {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
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

  onLiveChat() {
    const promise1 = new Promise((resolve, reject) => {
      this.router.navigate(["/", "contact-page-component"]);
      resolve("Success!");
    });

    promise1.then((value) => {
      var clientForm = document.getElementById("ClientForm");
      clientForm.scrollIntoView(true);
    });
  }
  onPaymentPlan() {
    
    if (document.documentElement.clientWidth >= 1200) {
      this.calculatorOverlay.nativeElement.style.display = "block";
    }
    else 
    {
      this.calculatorOverlayMobile.nativeElement.style.display = "block";
    }
  }

  onCalculatorCancel() {
    
    if (document.documentElement.clientWidth >= 1200) {
      this.calculatorOverlay.nativeElement.style.display = "none";
    }
    else 
    {
      this.calculatorOverlayMobile.nativeElement.style.display = "none";
    }
  }

  oninput1Mini() {
    if (this.input1.nativeElement.value.length > 6) {
      this.input1.nativeElement.value = this.input1.nativeElement.value.slice(
        0,
        6
      );
    }

    var left = ((this.input1.nativeElement.value - 750) * 100) / 11250;
    var offset = 26;

    if (this.input1.nativeElement.value < 750) {
      left = 0;
      this.doCalculation(750);
    } else if (this.input1.nativeElement.value > 12000) {
      left = 100;
      this.doCalculation(12000);
    } else {
      this.doCalculation(this.input1.nativeElement.value);
    }
    this.pointer.nativeElement.style.left =
      "calc(" + left + "% - " + offset + "px)";
  }

  onInput1FocusOutMini() {
    if (this.input1.nativeElement.value < 750) {
      this.input1.nativeElement.value = 750;
    }
    if (this.input1.nativeElement.value > 12000) {
      this.input1.nativeElement.value = 12000;
    }
  }

  onImageDragStartMini(event) {
    return false;
  }
  onDragStartMini(event) {
    if (event.touches) {
      this.mousePosition = event.touches[0].clientX;
    } else {
      this.mousePosition = event.pageX;
    }

    this.pointerGrabbed = true;
    this.initialPointerPosition = this.pointer.nativeElement.offsetLeft;
  }

  doCalculation(amount: number) {
    this.input3.nativeElement.value = (amount * this.depositNumber) / 100;
  }

  calculatorClick() {
    this.monthly =
      Math.round(
        (this.input3.nativeElement.value / 20 + Number.EPSILON) * 100
      ) / 100;
    this.weekly =
      Math.round(
        (this.input3.nativeElement.value / 80 + Number.EPSILON) * 100
      ) / 100;
  }

  onDepositClick(value) {  
    if(value === 0) {
      this.depositNumber = value;
      this.input2.nativeElement.value = "0$";
      this.input3.nativeElement.value = this.input1.nativeElement.value;
    } else {
      this.depositNumber = value;
      this.input2.nativeElement.value = value + "%";
      this.doCalculation(this.input1.nativeElement.value);
    }
  }

  @HostListener("document:mousemove", ["$event"])
  @HostListener("document:touchmove", ["$event"])
  onMouseMove(event) {
    if (this.pointerGrabbed) {
      this.onDrag(event);
    }
  }
  @HostListener("document:mouseup", ["$event"])
  @HostListener("document:touchend", ["$event"])
  onMouseUp(event) {
    if (this.pointerGrabbed) {
      this.pointerGrabbed = false;
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    var left = ((this.input1.nativeElement.value - 750) * 100) / 11250;
    var offset = 26;

    if (this.input1.nativeElement.value < 750) {
      left = 0;
    }
    if (this.input1.nativeElement.value > 12000) {
      left = 100;
    }
    this.pointer.nativeElement.style.left =
      "calc(" + left + "% - " + offset + "px)";
  }

  onDrag(event) {
    let currentMousePosition = 0;

    if (event.touches) {
      currentMousePosition = event.touches[0].clientX;
    } else {
      currentMousePosition = event.pageX;
    }

    if (currentMousePosition === 0) {
      return;
    }

    const offset = currentMousePosition - this.mousePosition;
    let newPosition = this.initialPointerPosition + offset;

    if (newPosition < -26) {
      newPosition = -26;
    }
    if (
      newPosition >
      this.pointer.nativeElement.parentElement.offsetWidth - 26
    ) {
      newPosition = this.pointer.nativeElement.parentElement.offsetWidth - 26;
    }
    this.pointer.nativeElement.style.left = newPosition + "px";

    var leftPercent =
      ((newPosition + 26) * 100) /
      this.pointer.nativeElement.parentElement.offsetWidth;

    var inputValue = (leftPercent * 11250) / 100 + 750;

    this.input1.nativeElement.value = parseInt(inputValue.toString(), 10);

    this.doCalculation(this.input1.nativeElement.value);
  }
}
