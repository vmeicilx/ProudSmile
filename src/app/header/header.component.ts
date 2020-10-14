import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private elRef: ElementRef;
  private renderer: Renderer2;
  constructor(private router: Router, el: ElementRef, renderer: Renderer2) {
    
    this.elRef = el;
    this.renderer = renderer;
  }

  ngOnInit(): void {}

  onLogoClick() {
    this.router.navigate(['/', 'home-page-component']);
  }

  onMenuItemClick(item: string) {
    this.router.navigate(['/', item]);
  }

  mouseEnter(){
    //this.removeSecondStyle();
 }

 mouseLeave(){
  //this.setSecondStyle();
 }

 setSecondStyle(){
   
  var header = this.elRef.nativeElement;
  header.classList.add("secondStyle");
  var logo = header.querySelector('#Homepage');
  //var bigMenuItems = header.querySelector('#BigMenuItems');
  var menuItem1 = header.querySelector('#menuItem1');
  menuItem1.classList.add("secondStyle");
  var menuItem2 = header.querySelector('#menuItem2');
  menuItem2.classList.add("secondStyle");
  var menuItem3 = header.querySelector('#menuItem3');
  menuItem3.classList.add("secondStyle");
  var menuItem4 = header.querySelector('#menuItem4');
  menuItem4.classList.add("secondStyle");
  var menuItem5 = header.querySelector('#menuItem5');
  menuItem5.classList.add("secondStyle");
  var menuItem6 = header.querySelector('#menuItem6');
  menuItem6.classList.add("secondStyle");
  var menuItem7 = header.querySelector('#menuItem7');
  menuItem7.classList.add("secondStyle");
  var smallMenuItem1 = header.querySelector('#smallMenuItem1');
  smallMenuItem1.classList.add("secondStyle");
  var smallMenuItem2 = header.querySelector('#smallMenuItem2');
  smallMenuItem2.classList.add("secondStyle");
  var smallMenuItem3 = header.querySelector('#smallMenuItem3');
  smallMenuItem3.classList.add("secondStyle");
  logo.style.fill = "white";
 }
 
 removeSecondStyle(){
   
  var header = this.elRef.nativeElement;
  header.classList.remove("secondStyle");
  var logo = header.querySelector('#Homepage');
  //var bigMenuItems = header.querySelector('#BigMenuItems');
  var menuItem1 = header.querySelector('#menuItem1');
  menuItem1.classList.remove("secondStyle");
  var menuItem2 = header.querySelector('#menuItem2');
  menuItem2.classList.remove("secondStyle");
  var menuItem3 = header.querySelector('#menuItem3');
  menuItem3.classList.remove("secondStyle");
  var menuItem4 = header.querySelector('#menuItem4');
  menuItem4.classList.remove("secondStyle");
  var menuItem5 = header.querySelector('#menuItem5');
  menuItem5.classList.remove("secondStyle");
  var menuItem6 = header.querySelector('#menuItem6');
  menuItem6.classList.remove("secondStyle");
  var menuItem7 = header.querySelector('#menuItem7');
  menuItem7.classList.remove("secondStyle");
  var smallMenuItem1 = header.querySelector('#smallMenuItem1');
  smallMenuItem1.classList.remove("secondStyle");
  var smallMenuItem2 = header.querySelector('#smallMenuItem2');
  smallMenuItem2.classList.remove("secondStyle");
  var smallMenuItem3 = header.querySelector('#smallMenuItem3');
  smallMenuItem3.classList.remove("secondStyle");
  logo.style.fill = "black";
 }
}
