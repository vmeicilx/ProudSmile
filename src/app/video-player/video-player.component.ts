import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  private elRef: ElementRef;
  private renderer: Renderer2;
  
  @Input() text: string;

  constructor(el: ElementRef, renderer: Renderer2) {
    this.elRef = el;
    this.renderer = renderer;
  }

  ngOnInit(): void {
  }

  playVideo(event){
    event.currentTarget.previousSibling.play();
  }

}
