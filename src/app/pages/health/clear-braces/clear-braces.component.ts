import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-clear-braces",
  templateUrl: "./clear-braces.component.html",
  styleUrls: ["./clear-braces.component.scss"]
})
export class ClearBracesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  seeAllFinancial() {
    this.router.navigate(["/", "payment-page-component"]);
  }
}
