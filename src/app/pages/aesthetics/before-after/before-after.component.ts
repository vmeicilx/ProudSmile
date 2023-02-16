import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { gsap } from 'gsap';
import { Observable } from "rxjs";

@Component({
  selector: "app-before-after",
  templateUrl: "./before-after.component.html",
  styleUrls: ["./before-after.component.scss"],
})
export class BeforeAfterComponent implements OnInit {
  @ViewChild("art1") art1: ElementRef;
  @ViewChild("art2") art2: ElementRef;

  @ViewChild("case0Before") case0Before: ElementRef;
  @ViewChild("case0After") case0After: ElementRef;
  @ViewChild("case1Before") case1Before: ElementRef;
  @ViewChild("case1After") case1After: ElementRef;
  @ViewChild("case2Before") case2Before: ElementRef;
  @ViewChild("case2After") case2After: ElementRef;
  @ViewChild("case3Before") case3Before: ElementRef;
  @ViewChild("case3After") case3After: ElementRef;
  @ViewChild("case4Before") case4Before: ElementRef;
  @ViewChild("case4After") case4After: ElementRef;
  @ViewChild("case5Before") case5Before: ElementRef;
  @ViewChild("case5After") case5After: ElementRef;
  @ViewChild("case6Before") case6Before: ElementRef;
  @ViewChild("case6After") case6After: ElementRef;
  @ViewChild("case7Before") case7Before: ElementRef;
  @ViewChild("case7After") case7After: ElementRef;
  @ViewChild("case8Before") case8Before: ElementRef;
  @ViewChild("case8After") case8After: ElementRef;
  @ViewChild("case9Before") case9Before: ElementRef;
  @ViewChild("case9After") case9After: ElementRef;
  @ViewChild("case10Before") case10Before: ElementRef;
  @ViewChild("case10After") case10After: ElementRef;
  @ViewChild("case11Before") case11Before: ElementRef;
  @ViewChild("case11After") case11After: ElementRef;
  @ViewChild("case12Before") case12Before: ElementRef;
  @ViewChild("case12After") case12After: ElementRef;
  @ViewChild("case13Before") case13Before: ElementRef;
  @ViewChild("case13After") case13After: ElementRef;
  @ViewChild("case14Before") case14Before: ElementRef;
  @ViewChild("case14After") case14After: ElementRef;
  @ViewChild("case15Before") case15Before: ElementRef;
  @ViewChild("case15After") case15After: ElementRef;
  @ViewChild("case16Before") case16Before: ElementRef;
  @ViewChild("case16After") case16After: ElementRef;
  @ViewChild("case17Before") case17Before: ElementRef;
  @ViewChild("case17After") case17After: ElementRef;
  @ViewChild("case18Before") case18Before: ElementRef;
  @ViewChild("case18After") case18After: ElementRef;
  @ViewChild("case19Before") case19Before: ElementRef;
  @ViewChild("case19After") case19After: ElementRef;
  @ViewChild("case20Before") case20Before: ElementRef;
  @ViewChild("case20After") case20After: ElementRef;
  @ViewChild("case21Before") case21Before: ElementRef;
  @ViewChild("case21After") case21After: ElementRef;
  @ViewChild("case22Before") case22Before: ElementRef;
  @ViewChild("case22After") case22After: ElementRef;
  @ViewChild("case23Before") case23Before: ElementRef;
  @ViewChild("case23After") case23After: ElementRef;
  @ViewChild("case24Before") case24Before: ElementRef;
  @ViewChild("case24After") case24After: ElementRef;

  @ViewChild("btn0") btn0: ElementRef;
  @ViewChild("btn1") btn1: ElementRef;
  @ViewChild("btn2") btn2: ElementRef;
  @ViewChild("btn3") btn3: ElementRef;
  @ViewChild("btn4") btn4: ElementRef;
  @ViewChild("btn5") btn5: ElementRef;
  @ViewChild("btn6") btn6: ElementRef;
  @ViewChild("btn7") btn7: ElementRef;
  @ViewChild("btn8") btn8: ElementRef;
  @ViewChild("btn9") btn9: ElementRef;
  @ViewChild("btn10") btn10: ElementRef;
  @ViewChild("btn11") btn11: ElementRef;
  @ViewChild("btn12") btn12: ElementRef;
  @ViewChild("btn13") btn13: ElementRef;
  @ViewChild("btn14") btn14: ElementRef;
  @ViewChild("btn15") btn15: ElementRef;
  @ViewChild("btn16") btn16: ElementRef;
  @ViewChild("btn17") btn17: ElementRef;
  @ViewChild("btn18") btn18: ElementRef;
  @ViewChild("btn19") btn19: ElementRef;
  @ViewChild("btn20") btn20: ElementRef;
  @ViewChild("btn21") btn21: ElementRef;
  @ViewChild("btn22") btn22: ElementRef;
  @ViewChild("btn23") btn23: ElementRef;
  @ViewChild("btn24") btn24: ElementRef;


  @ViewChild("CaseView") caseView: ElementRef;
  @ViewChild("Concern") concern: ElementRef;
  @ViewChild("Procedures") procedures: ElementRef;

  @ViewChild("secondMember") secondMember: ElementRef;
  @ViewChild("thirdMember") thirdMember: ElementRef;
  @ViewChild("fourthMember") fourthMember: ElementRef;

  @ViewChild("logo1") logo1: ElementRef;
  @ViewChild("logo2") logo2: ElementRef;
  @ViewChild("logo3") logo3: ElementRef;

  @ViewChild("inBetweensText") inBetweensText: ElementRef;
  @ViewChild("inBetweensContainer") inBetweensContainer: ElementRef;
  @ViewChild("inBet1Img") inBet1Img: ElementRef;
  @ViewChild("inBet2Img") inBet2Img: ElementRef;

  @ViewChild("beforeImgC") beforeImgC: ElementRef;
  @ViewChild("beforeC") beforeC: ElementRef;
  @ViewChild("afImg") afImg: ElementRef;

  @ViewChild("JBefore") jBefore: ElementRef;
  @ViewChild("JBet2") jBet2: ElementRef;

  before = [];
  after = [];
  buttons = [];

  private _jsonURL = 'assets/cases.json';
  private cases;
  public firstTeamMember;
  public firstTeamRole;
  public firstTeamImg;
  public secondTeamMember;
  public secondTeamRole;
  public secondTeamImg;
  public thirdTeamMember;
  public thirdTeamRole;
  public thirdTeamImg;
  public fourthTeamMember;
  public fourthTeamRole;
  public fourthTeamImg;

  public inBet1Text;
  public inBet2Text;

  public beforeZoomImg;
  public afterZoomImg;
  public beforeImg;
  public afterImg;
  public beforeImgJ;
  public afterImgJ;

  public inBet1;
  public inBet2;

  galleryPath = "../../../../assets/aesthetics/BeforeAndAfter/Gallery/";

  constructor(private router: Router, private http: HttpClient, private title: Title, private meta: Meta) {
    this.title.setTitle("Dentist Gold Coast | Before and After Gallery");
    this.meta.addTags([{
      name: 'description',
      content: `Take a look at our before and after case gallery for some of the amazing smile transformations. We offer a free and obligation free smile assessment.`
    }]);

    this.getJSON().subscribe(data => {
      this.cases = data["cases"];
    });

  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  ngOnInit(): void { 
    if (window.innerWidth < 1200) {
      this.galleryPath = "../../../../assets/aesthetics/BeforeAndAfter/GalleryMobile/";
    }
  }

  ngAfterViewInit(): void {
    this.art1.nativeElement.style.opacity = "1";
    this.art2.nativeElement.style.opacity = "0";
    let art1 = true;
    setInterval(
      function () {
        if (art1) {
          this.art1.nativeElement.style.opacity = "0";
          this.art2.nativeElement.style.opacity = "1";
        } else {
          this.art1.nativeElement.style.opacity = "1";
          this.art2.nativeElement.style.opacity = "0";
        }
        art1 = !art1;
      }.bind(this),
      800
    );

    this.before.push(this.case0Before.nativeElement);
    this.before.push(this.case1Before.nativeElement);
    this.before.push(this.case2Before.nativeElement);
    this.before.push(this.case3Before.nativeElement);
    this.before.push(this.case4Before.nativeElement);
    this.before.push(this.case5Before.nativeElement);
    this.before.push(this.case6Before.nativeElement);
    this.before.push(this.case7Before.nativeElement);
    this.before.push(this.case8Before.nativeElement);
    this.before.push(this.case9Before.nativeElement);
    this.before.push(this.case10Before.nativeElement);
    this.before.push(this.case11Before.nativeElement);
    this.before.push(this.case12Before.nativeElement);
    this.before.push(this.case13Before.nativeElement);
    this.before.push(this.case14Before.nativeElement);
    this.before.push(this.case15Before.nativeElement);
    this.before.push(this.case16Before.nativeElement);
    this.before.push(this.case17Before.nativeElement);
    this.before.push(this.case18Before.nativeElement);
    this.before.push(this.case19Before.nativeElement);
    this.before.push(this.case20Before.nativeElement);
    this.before.push(this.case21Before.nativeElement);
    this.before.push(this.case22Before.nativeElement);
    this.before.push(this.case23Before.nativeElement);
    this.before.push(this.case24Before.nativeElement);
    this.after.push(this.case0After.nativeElement);
    this.after.push(this.case1After.nativeElement);
    this.after.push(this.case2After.nativeElement);
    this.after.push(this.case3After.nativeElement);
    this.after.push(this.case4After.nativeElement);
    this.after.push(this.case5After.nativeElement);
    this.after.push(this.case6After.nativeElement);
    this.after.push(this.case7After.nativeElement);
    this.after.push(this.case8After.nativeElement);
    this.after.push(this.case9After.nativeElement);
    this.after.push(this.case10After.nativeElement);
    this.after.push(this.case11After.nativeElement);
    this.after.push(this.case12After.nativeElement);
    this.after.push(this.case13After.nativeElement);
    this.after.push(this.case14After.nativeElement);
    this.after.push(this.case15After.nativeElement);
    this.after.push(this.case16After.nativeElement);
    this.after.push(this.case17After.nativeElement);
    this.after.push(this.case18After.nativeElement);
    this.after.push(this.case19After.nativeElement);
    this.after.push(this.case20After.nativeElement);
    this.after.push(this.case21After.nativeElement);
    this.after.push(this.case22After.nativeElement);
    this.after.push(this.case23After.nativeElement);
    this.after.push(this.case24After.nativeElement);
    this.buttons.push(this.btn0.nativeElement);
    this.buttons.push(this.btn1.nativeElement);
    this.buttons.push(this.btn2.nativeElement);
    this.buttons.push(this.btn3.nativeElement);
    this.buttons.push(this.btn4.nativeElement);
    this.buttons.push(this.btn5.nativeElement);
    this.buttons.push(this.btn6.nativeElement);
    this.buttons.push(this.btn7.nativeElement);
    this.buttons.push(this.btn8.nativeElement);
    this.buttons.push(this.btn9.nativeElement);
    this.buttons.push(this.btn10.nativeElement);
    this.buttons.push(this.btn11.nativeElement);
    this.buttons.push(this.btn12.nativeElement);
    this.buttons.push(this.btn13.nativeElement);
    this.buttons.push(this.btn14.nativeElement);
    this.buttons.push(this.btn15.nativeElement);
    this.buttons.push(this.btn16.nativeElement);
    this.buttons.push(this.btn17.nativeElement);
    this.buttons.push(this.btn18.nativeElement);
    this.buttons.push(this.btn19.nativeElement);
    this.buttons.push(this.btn20.nativeElement);
    this.buttons.push(this.btn21.nativeElement);
    this.buttons.push(this.btn22.nativeElement);
    this.buttons.push(this.btn23.nativeElement);
    this.buttons.push(this.btn24.nativeElement);

  }

  toNext(c: number) {
    if (window.innerWidth < 1200) {

      const currentCaseBefore = this.before[c];
      const currentCaseAfter = this.after[c];
      if (currentCaseBefore.style.opacity === "0") {
        currentCaseBefore.style.opacity = "1";
        currentCaseAfter.style.opacity = "0";

        const currentButton = this.buttons[c];
        currentButton.style.visibility = "visible";
        currentButton.classList.remove("gallery-btn-small");
        currentButton.classList.add("gallery-btn-big");
        setTimeout(() => {
          currentButton.style.transition = "unset";
        }, 300);
      }
      else {
        currentCaseBefore.style.opacity = "0";
        currentCaseAfter.style.opacity = "1";

        const currentButton = this.buttons[c];
        currentButton.style.transition = "all 0.3s";
        currentButton.style.visibility = "hidden";

        currentButton.classList.remove("gallery-btn-big");
        currentButton.classList.add("gallery-btn-small");
      }
    }
  }

  toAfter(c: number) {
    if (window.innerWidth >= 1200) {
      const currentCaseBefore = this.before[c];
      const currentCaseAfter = this.after[c];
      currentCaseBefore.style.opacity = "0";
      currentCaseAfter.style.opacity = "1";

      const currentButton = this.buttons[c];
      currentButton.style.transition = "all 0.3s";
      currentButton.style.visibility = "hidden";

      currentButton.classList.remove("gallery-btn-big");
      currentButton.classList.add("gallery-btn-small");
    }

  }

  toBefore(c: number) {
    if (window.innerWidth >= 1200) {
      const currentCaseBefore = this.before[c];
      const currentCaseAfter = this.after[c];
      currentCaseBefore.style.opacity = "1";
      currentCaseAfter.style.opacity = "0";

      const currentButton = this.buttons[c];
      currentButton.style.visibility = "visible";
      currentButton.classList.remove("gallery-btn-small");
      currentButton.classList.add("gallery-btn-big");
      setTimeout(() => {
        currentButton.style.transition = "unset";
      }, 300);
    }

  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  onCaseClick(c: number) {

    const cas = this.cases[c];
    const team = cas["team"];
    const concerns = cas["concerns"];
    const procedures = cas["procedures"];
    const logos = cas["logo"];
    const inBet = cas["inBetweens"];
    const inBetText = cas["inBetweensText"];

    if (cas["index"] === 2) {
      this.beforeImgC.nativeElement.style.display = "none";
      this.jBefore.nativeElement.style.display = "none";
      this.beforeC.nativeElement.style.gridTemplateColumns = "100%";
      this.afImg.nativeElement.style.maxWidth = "50%";
      this.afImg.nativeElement.style.margin = "auto";
    } else {

      this.beforeImgC.nativeElement.style.display = "block";
      this.jBefore.nativeElement.style.display = "block";
      this.beforeC.nativeElement.style.gridTemplateColumns = "50% 50%";
      this.afImg.nativeElement.style.maxWidth = "100%";
      this.afImg.nativeElement.style.margin = "unset";
    }

    this.beforeZoomImg = cas["beforeZoomImg"];
    this.afterZoomImg = cas["afterZoomImg"];

    this.beforeImg = cas["beforeImg"];
    this.afterImg = cas["afterImg"];
    this.beforeImgJ = inBet[0];
    this.afterImgJ = inBet[1];

    this.concern.nativeElement.innerHTML = "";
    this.procedures.nativeElement.innerHTML = "";

    for (let i = 0; i < concerns.length; i++) {
      this.renderItem(this.concern.nativeElement, concerns[i]);
    }
    for (let i = 0; i < procedures.length; i++) {
      this.renderItem(this.procedures.nativeElement, procedures[i]);
    }

    this.firstTeamMember = team[0].name;
    this.firstTeamImg = team[0].img;
    this.firstTeamRole = team[0].role;

    if (team.length > 1) {
      this.secondMember.nativeElement.style.display = "flex";
      this.secondTeamMember = team[1].name;
      this.secondTeamImg = team[1].img;
      this.secondTeamRole = team[1].role;
    }
    else {
      this.secondMember.nativeElement.style.display = "none";
    }

    if (team.length > 2) {
      this.thirdMember.nativeElement.style.display = "flex";
      this.thirdTeamMember = team[2].name;
      this.thirdTeamImg = team[2].img;
      this.thirdTeamRole = team[2].role;
    }
    else {
      this.thirdMember.nativeElement.style.display = "none";
    }

    if (team.length > 3) {
      this.fourthMember.nativeElement.style.display = "flex";
      this.fourthTeamMember = team[3].name;
      this.fourthTeamImg = team[3].img;
      this.fourthTeamRole = team[3].role;
    }
    else {
      this.fourthMember.nativeElement.style.display = "none";
    }

    if (logos[0]) {
      this.logo1.nativeElement.style.display = "flex";
    }
    else {
      this.logo1.nativeElement.style.display = "none";
    }
    if (logos[1]) {
      this.logo2.nativeElement.style.display = "flex";
    }
    else {
      this.logo2.nativeElement.style.display = "none";
    }
    if (logos[2]) {
      this.logo3.nativeElement.style.display = "flex";
    }
    else {
      this.logo3.nativeElement.style.display = "none";
    }

    if (inBet === "") {
      this.inBetweensContainer.nativeElement.style.display = "none";
      this.inBetweensText.nativeElement.style.display = "none";
    } else {
      if (inBet.length === 3) {

        this.inBet1 = inBet[2];
        this.inBet1Text = inBetText[0];
        this.inBetweensText.nativeElement.style.display = "grid";
        this.inBetweensContainer.nativeElement.style.display = "grid";
        this.inBetweensContainer.nativeElement.style.gridTemplateColumns = "33% 33% 33%";
        this.inBet2Img.nativeElement.style.display = "none";
        this.jBet2.nativeElement.style.display = "none";

      } else if (inBet.length === 4) {

        this.inBet1 = inBet[2];
        this.inBet1Text = inBetText[0];
        this.inBet2 = inBet[3];
        this.inBet2Text = inBetText[1];
        this.inBet2Img.nativeElement.style.display = "block";
        this.jBet2.nativeElement.style.display = "block";
        this.inBetweensText.nativeElement.style.display = "grid";

        if (cas["index"] === 2) {
          this.inBetweensContainer.nativeElement.style.gridTemplateColumns = "33% 33% 33%";
        } else {
          this.inBetweensContainer.nativeElement.style.gridTemplateColumns = "25% 25% 25% 25%";
        }
        this.inBetweensContainer.nativeElement.style.display = "grid";
      }
    }


    this.caseView.nativeElement.style.visibility = "visible";
    document.documentElement.style.overflowY = "hidden";
  }

  onCaseClose() {

    this.beforeImg = "";
    this.afterImg = "";
    this.beforeZoomImg = "";
    this.afterZoomImg = "";
    this.caseView.nativeElement.style.visibility = "hidden";
    document.documentElement.style.overflowY = "scroll";
  }

  renderItem(parent, text) {
    const item = document.createElement("div");
    const arrow = document.createElement("div");
    arrow.classList.add("concern-arrow");
    const textDiv = document.createElement("div");
    textDiv.innerHTML = text;

    item.classList.add("flexy-row", "concern-item");
    item.append(arrow);
    item.append(textDiv);
    parent.append(item)
  }

  renderTeamMember(parent, text) {
    const item = document.createElement("div");
    const arrow = document.createElement("div");
    arrow.classList.add("concern-arrow");
    const textDiv = document.createElement("div");
    textDiv.innerHTML = text;

    item.classList.add("flexy-row", "concern-item");
    item.append(arrow);
    item.append(textDiv);
    parent.append(item)
  }

  onContactPage() {
    const promise1 = new Promise((resolve, reject) => {
      this.router.navigate(["/", "ContactPage"]);
      resolve("Success!");
    });

    promise1.then((value) => {
      var clientForm = document.getElementById("ClientForm");
      clientForm.scrollIntoView(true);
    });
  }
}
