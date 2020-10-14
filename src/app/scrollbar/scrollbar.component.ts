import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostListener,
    Inject,
  } from "@angular/core";
  
  @Component({
    selector: "scrollbar",
    templateUrl: "./scrollbar.template.html",
    styleUrls: ["./scrollbar.style.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class ScrollbarComponent {
    constructor(
      @Inject(ElementRef) readonly elementRef: ElementRef<HTMLElement>,
    ) {}
  
    get verticalScrolled(): number {
      const {
        scrollTop,
        scrollHeight,
        clientHeight
      } = this.elementRef.nativeElement;
  
      return scrollTop / (scrollHeight - clientHeight);
    }
  
    get horizontalScrolled(): number {
      const {
        scrollLeft,
        scrollWidth,
        clientWidth
      } = this.elementRef.nativeElement;
  
      return scrollLeft / (scrollWidth - clientWidth);
    }
  
    get verticalPosition(): number {
      return this.verticalScrolled * (100 - this.verticalSize);
    }
  
    get horizontalPosition(): number {
      return this.horizontalScrolled * (100 - this.horizontalSize);
    }
  
    get verticalSize(): number {
      const { clientHeight, scrollHeight } = this.elementRef.nativeElement;
  
      return Math.ceil((clientHeight / scrollHeight) * 100);
    }
  
    get horizontalSize(): number {
      const { clientWidth, scrollWidth } = this.elementRef.nativeElement;
  
      return Math.ceil((clientWidth / scrollWidth) * 100);
    }
  
    get hasVerticalBar(): boolean {
      return this.verticalSize < 100;
    }
  
    get hasHorizontalBar(): boolean {
      return this.horizontalSize < 100;
    }
  
    @HostListener("scroll")
    onScroll() {
      // just to trigger change detection
      //var scrollingVideo = document.querySelector("#scrollingVideo");
      //scrollingVideo.dispatchEvent(new CustomEvent('onCustomScroll', {detail: {position: this.verticalPosition}}));

      //var homePage = document.querySelector("#homePageId");
      //homePage.dispatchEvent(new CustomEvent('onCustomScroll'));
    }
  
    onVertical(scrollTop: number) {
      this.elementRef.nativeElement.scrollTop = scrollTop;
    }
  
    onHorizontal(scrollLeft: number) {
      this.elementRef.nativeElement.scrollLeft = scrollLeft;
    }
  }
  