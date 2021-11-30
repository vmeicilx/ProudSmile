import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropwodn-green',
  templateUrl: './dropwodn-green.component.html',
  styleUrls: ['./dropwodn-green.component.scss']
})
export class DropwodnGreenComponent implements OnInit {

  @Input() question: string;
  @Input() index: string;
  status: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onDropDownClick() {
    this.status = !this.status;
  }

}
