import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-dva",
  templateUrl: "./dva.component.html"
})
export class DvaComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  seeAllFinancial() {
    this.router.navigate(["/", "payment-page-component"]);
  }
}
