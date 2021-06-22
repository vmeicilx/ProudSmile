import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss'],
})
export class SmallCardComponent implements OnInit {
  @Input() text: string;
  @Input() imageUrl: string;

  constructor() {}

  ngOnInit(): void {}

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
