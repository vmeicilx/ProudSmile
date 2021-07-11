import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
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

  before = [];
  after = [];
  buttons = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

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

    this.renderItem(this.concern.nativeElement, "Gummy smile");
    this.renderItem(this.concern.nativeElement, "Discoloured teeth and fillings");
    this.renderItem(this.concern.nativeElement, "Inflamed gums");
    this.renderItem(this.concern.nativeElement, "Disproportioned teeth");
    this.renderItem(this.concern.nativeElement, "Worn enamel");

    
    this.renderItem(this.procedures.nativeElement, "Traditional Braces");
    this.renderItem(this.procedures.nativeElement, "Invisalign");
    this.renderItem(this.procedures.nativeElement, "Full Mouth Porcelain Crowns");
    this.renderItem(this.procedures.nativeElement, "Porcelain Bridge");
    this.renderItem(this.procedures.nativeElement, "Gum Surgery");
    this.renderItem(this.procedures.nativeElement, "Fillings");
    this.renderItem(this.procedures.nativeElement, "Root Canal Therapy");
    
  }

  toAfter(c: number) {
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

  toBefore(c: number) {
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

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  onCaseClick(c: number) {
    this.caseView.nativeElement.style.visibility = "visible";
    document.documentElement.style.overflowY = "hidden";
  }

  onCaseClose() {
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

  onContactPage() {
    this.router.navigate(["/", "contact-page-component", true]);
    window.scrollTo(0, 0);
  }
}
