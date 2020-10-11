import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BigCardComponent implements OnInit {
  @Input() layoutDirection: string;
  @Input() text: string;
  @Input() title: HTMLElement;
  @Input() number: string;
  @Input() imageUrl: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
