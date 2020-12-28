import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-who-we-are",
  templateUrl: "./who-we-are.component.html",
  styleUrls: ["./who-we-are.component.scss"]
})
export class WhoWeAreComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  seeAllFinancial() {
    this.router.navigate(["/", "payment-page-component"]);
  }
}
