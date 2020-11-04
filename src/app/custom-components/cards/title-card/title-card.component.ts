import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.scss']
})
export class TitleCardComponent implements OnInit {
  @Input() title: HTMLElement;
  @Input() index: string;

  constructor() { }

  ngOnInit(): void {
  }

}
