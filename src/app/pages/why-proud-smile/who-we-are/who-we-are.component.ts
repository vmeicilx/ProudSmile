import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-who-we-are",
  templateUrl: "./who-we-are.component.html",
  styleUrls: ["./who-we-are.component.scss"]
})
export class WhoWeAreComponent implements OnInit {
  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.title.setTitle("Who we are: The Team you want to talk to");
    this.meta.addTags([{
      name: 'description',
      content: `Our team of skilled and experienced professionals are here to listen, judgment free. We aim to provide a personalised service and help you achieve optimum health and aesthetics.`
    }]);
  }

  ngOnInit(): void {}

  seeAllFinancial() {
    this.router.navigate(["/", "payment-page-component"]);
  }
}
