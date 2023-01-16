import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-dva",
  templateUrl: "./dva.component.html"
})
export class DvaComponent implements OnInit {
  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.title.setTitle("Department of Veteran Affairs - Proud Smile Dental");
    this.meta.addTags([{
      name: 'description',
      content: `We’re proud to provide bulk billing services for holders of Gold and White cards from the Department of Veterans Affairs (DVA). Call us Now or book online.`
    }]);
  }

  ngOnInit(): void {}

  seeAllFinancial() {
    this.router.navigate(["/", "PaymentPage"]);
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
