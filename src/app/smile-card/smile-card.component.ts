import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-smile-card',
  templateUrl: './smile-card.component.html',
  styleUrls: ['./smile-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SmileCardComponent implements OnInit {
  @Input() layoutDirection: string;
  @Input() imageUrl: string;
  @Input() title: HTMLElement;
  @Input() index: string;
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
