import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"]
})
export class DropdownComponent implements OnInit {
  @Input() question: string;
  @Input() index: string;
  status: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onDropDownClick() {
    this.status = !this.status;
  }
}
