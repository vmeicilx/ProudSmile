import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-invasilign",
  templateUrl: "./invasilign.component.html",
  styleUrls: ["./invasilign.component.scss"]
})
export class InvasilignComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  seeAllFinancial() {
    this.router.navigate(["/", "payment-page-component"]);
  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
