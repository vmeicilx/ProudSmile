import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-extractions",
  templateUrl: "./extractions.component.html"
})
export class ExtractionsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onImplantClick() {
    this.router.navigate(["/", "SingleTooth"]);
  }
}
