import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-text',
  templateUrl: './image-text.component.html',
  styleUrls: ['./image-text.component.scss'],
})
export class ImageTextComponent implements OnInit {
  @Input() text: string;
  @Input() imageUrl: string;
  @Input() textMaxWdith: string;
  @Input() layoutAlign: string;

  constructor() {}

  ngOnInit(): void {}

  getTextMaxWidth()
  {
    return this.textMaxWdith;
  }
}
