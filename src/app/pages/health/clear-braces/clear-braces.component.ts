import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-clear-braces",
  templateUrl: "./clear-braces.component.html",
  styleUrls: ["./clear-braces.component.scss"]
})
export class ClearBracesComponent implements OnInit {
  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.title.setTitle("Clear Braces Gold Coast - Pay as you go - Proud Smile");
    this.meta.addTags([{
      name: 'description',
      content: `We offer the most affordable clear braces on the Gold Coast. You can pay for your braces in monthly instalments, no finance required.`
    }, { name: 'keywords', content: 'teeth straightening gold coast, clear braces gold coast, dental braces gold coast' }]);
  }

  ngOnInit(): void {}

  seeAllFinancial() {
    this.router.navigate(["/", "payment-page-component"]);
  }
}
