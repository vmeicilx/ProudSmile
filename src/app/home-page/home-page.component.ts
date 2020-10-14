import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Renderer2,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  private elRef: ElementRef;
  private renderer: Renderer2;
  constructor(el: ElementRef, renderer: Renderer2) {
    this.elRef = el;
    this.renderer = renderer;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.elRef.nativeElement.children[0].addEventListener(
      'onCustomScroll',
      function (e) {
        var video = this.elRef.nativeElement.children[0].querySelector(
          '#HomePageVideo'
        );
        if (video.offsetTop <= 0) {
          this.removeSecondStyle();
        } else {
          //this.setSecondStyle();
        }
        console.log('asd');
      }.bind(this),
      false
    );
    //this.setSecondStyle();
    var mainPage = this.renderer.parentNode(this.elRef.nativeElement);
    var header = mainPage.querySelector('#app-header');
    var headerHeight = header.clientHeight;
    this.elRef.nativeElement.style.marginTop = '-' + headerHeight + 'px';
  }

  setSecondStyle() {
    var mainPage = this.renderer.parentNode(this.elRef.nativeElement);
    var header = mainPage.querySelector('#app-header');
    header.classList.add('secondStyle');
    var logo = header.querySelector('#Homepage');
    var menuItem1 = header.querySelector('#menuItem1');
    menuItem1.classList.add('secondStyle');
    var menuItem2 = header.querySelector('#menuItem2');
    menuItem2.classList.add('secondStyle');
    var menuItem3 = header.querySelector('#menuItem3');
    menuItem3.classList.add('secondStyle');
    var menuItem4 = header.querySelector('#menuItem4');
    menuItem4.classList.add('secondStyle');
    var menuItem5 = header.querySelector('#menuItem5');
    menuItem5.classList.add('secondStyle');
    var menuItem6 = header.querySelector('#menuItem6');
    menuItem6.classList.add('secondStyle');
    var menuItem7 = header.querySelector('#menuItem7');
    menuItem7.classList.add('secondStyle');
    var smallMenuItem1 = header.querySelector('#smallMenuItem1');
    smallMenuItem1.classList.add('secondStyle');
    var smallMenuItem2 = header.querySelector('#smallMenuItem2');
    smallMenuItem2.classList.add('secondStyle');
    var smallMenuItem3 = header.querySelector('#smallMenuItem3');
    smallMenuItem3.classList.add('secondStyle');
    logo.style.fill = 'white';
  }

  removeSecondStyle() {
    var mainPage = this.renderer.parentNode(this.elRef.nativeElement);
    var header = mainPage.querySelector('#app-header');
    header.classList.remove('secondStyle');
    var logo = header.querySelector('#Homepage');
    var menuItem1 = header.querySelector('#menuItem1');
    menuItem1.classList.remove('secondStyle');
    var menuItem2 = header.querySelector('#menuItem2');
    menuItem2.classList.remove('secondStyle');
    var menuItem3 = header.querySelector('#menuItem3');
    menuItem3.classList.remove('secondStyle');
    var menuItem4 = header.querySelector('#menuItem4');
    menuItem4.classList.remove('secondStyle');
    var menuItem5 = header.querySelector('#menuItem5');
    menuItem5.classList.remove('secondStyle');
    var menuItem6 = header.querySelector('#menuItem6');
    menuItem6.classList.remove('secondStyle');
    var menuItem7 = header.querySelector('#menuItem7');
    menuItem7.classList.remove('secondStyle');
    var smallMenuItem1 = header.querySelector('#smallMenuItem1');
    smallMenuItem1.classList.remove('secondStyle');
    var smallMenuItem2 = header.querySelector('#smallMenuItem2');
    smallMenuItem2.classList.remove('secondStyle');
    var smallMenuItem3 = header.querySelector('#smallMenuItem3');
    smallMenuItem3.classList.remove('secondStyle');
    logo.style.fill = 'black';
  }
}
