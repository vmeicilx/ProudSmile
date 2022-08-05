import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked, OnInit{
  title = 'ProudSmile';

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;

  constructor(private metaTagService: Meta) { }
  ngAfterViewChecked(): void {
  }

  ngOnInit() {

  }

}
