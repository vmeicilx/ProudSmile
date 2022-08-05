import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

function RegisterAdds() {
  var firstCloseButton = document.getElementById("first-close-btn"),
    firstExpanded = document.getElementById("FirstAddExpanded"),
    firstAdd = document.getElementById("FirstAddCard"),
    secondCloseButton = document.getElementById("second-close-btn"),
    secondExpanded = document.getElementById("SecondAddExpanded"),
    secondAdd = document.getElementById("SecondAddCard"),
    thirdCloseButton = document.getElementById("third-close-btn"),
    thirdExpanded = document.getElementById("ThirdAddExpanded"),
    thirdAdd = document.getElementById("ThirdAddCard"),
    fourthCloseButton = document.getElementById("fourth-close-btn"),
    fourthExpanded = document.getElementById("FourthAddExpanded"),
    fourthAdd = document.getElementById("FourthAddCard"),
    tl = new TimelineLite({
      paused: true,
    }),
    t2 = new TimelineLite({
      paused: true,
    }),
    t3 = new TimelineLite({
      paused: true,
    }),
    t4 = new TimelineLite({
      paused: true,
    });
    
  document.body.style.overflow = "hidden";

  if (window.innerWidth < 1200) {
    firstAdd = document.getElementById("FirstAddCardMobile");
    secondAdd = document.getElementById("SecondAddCardMobile");
    thirdAdd = document.getElementById("ThirdAddCardMobile");
    fourthAdd = document.getElementById("FourthAddCardMobile");
  };

  tl.to(firstExpanded, 0.3, {
    visibility: "visible",
    opacity: 1,
    ease: Power1.easeOut,
  }).progress(1).progress(0);

  t2.to(secondExpanded, 0.3, {
    visibility: "visible",
    opacity: 1,
    ease: Power1.easeOut,
  }).progress(1).progress(0);

  t3.to(thirdExpanded, 0.3, {
    visibility: "visible",
    opacity: 1,
    ease: Power1.easeOut,
  }).progress(1).progress(0);
  
  t4.to(fourthExpanded, 0.3, {
    visibility: "visible",
    opacity: 1,
    ease: Power1.easeOut,
  }).progress(1).progress(0);


  function firstAddClick() {
    tl.play();
  }
  function firstCloseClick() {
    tl.reverse();
  }

  function secondAddClick() {
    t2.play();
  }
  function secondCloseClick() {
    t2.reverse();
  }

  function thirdAddClick() {
    t3.play();
  }
  function thirdCloseClick() {
    t3.reverse();
  }
  
  function fourthAddClick() {
    t4.play();
  }
  function fourthCloseClick() {
    t4.reverse();
  }

  firstAdd.onclick = firstAddClick;
  firstCloseButton.onclick = firstCloseClick;
  secondAdd.onclick = secondAddClick;
  secondCloseButton.onclick = secondCloseClick;
  thirdAdd.onclick = thirdAddClick;
  thirdCloseButton.onclick = thirdCloseClick;
  fourthAdd.onclick = fourthAddClick;
  fourthCloseButton.onclick = fourthCloseClick;
}

@Component({
  selector: "app-specials",
  templateUrl: "./specials.component.html",
  styleUrls: ["./specials.component.scss"],
})
export class SpecialsComponent implements OnInit {
  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.title.setTitle("Dental Special Offers | Proud Smile | Gold Coast");
    this.meta.addTags([{
      name: 'description',
      content: `Check out our specials. Zoom Whitening only $495. New Patient Exam No Gap for all Health Insurances. Invisalign starting from $2850. PAYG Braces.`
    }]);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    RegisterAdds();
  }

  onInternalLink(item: string) {
    this.router.navigate(["/", item]);
    window.scrollTo(0, 0);
  }

  onAddClick() {
    document.documentElement.style.overflowY = "hidden";
  }

  onAddClose() {
    document.documentElement.style.overflowY = "scroll";
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
