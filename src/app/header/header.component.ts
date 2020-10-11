import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLogoClick() {
    this.router.navigate(['/', 'home-page-component']);
  }

  onMenuItemClick(item: string) {
    this.router.navigate(['/', item]);
  }
}
