import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TextCardComponent implements OnInit {
  @Input() text: string;
  @Input() title: HTMLElement;
  @Input() index: string;
  @Input() buttonText: string;
  constructor() { }

  ngOnInit(): void {
  }

}
