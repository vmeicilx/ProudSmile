import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-specials",
  templateUrl: "./specials.component.html"
})
export class SpecialsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onInternalLink(item: string) {
    this.router.navigate(["/", item]);
    window.scrollTo(0, 0);
  }
}
