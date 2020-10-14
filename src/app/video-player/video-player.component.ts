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

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number = 300;
  color: string = "blue";

  constructor(el: ElementRef, renderer: Renderer2) {
    this.elRef = el;
    this.renderer = renderer;
    this.color="red";
  }

  ngOnInit(): void {
  }

  playVideo(event){
    event.currentTarget.previousSibling.play();
  }

}
