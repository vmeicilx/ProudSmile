import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-payment-page",
  templateUrl: "./payment-page.component.html",
  styleUrls: ["./payment-page.component.scss"]
})
export class PaymentPageComponent implements OnInit {
  @ViewChild("input1") input1: ElementRef;
  @ViewChild("pointer") pointer: ElementRef;
  pointerGrabbed: boolean = false;
  mousePosition: number;
  initialPointerPosition: number;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.input1.nativeElement.value = 5000;
    this.oninput1();

    // var left =
    //   this.input1.nativeElement.value * 0.0088888888888888889 -
    //   -6.666666666666667;
    // this.pointer.nativeElement.style.left = "calc(" + left + "% - 24px)";
  }

  oninput1() {
    if (this.input1.nativeElement.value.length > 6) {
      this.input1.nativeElement.value = this.input1.nativeElement.value.slice(
        0,
        6
      );
    }

    var left = ((this.input1.nativeElement.value - 750) * 100) / 11250;
    var offset = 26;

    if (this.input1.nativeElement.value < 750) {
      left = 0;
    }
    if (this.input1.nativeElement.value > 12000) {
      left = 100;
    }
    this.pointer.nativeElement.style.left =
      "calc(" + left + "% - " + offset + "px)";
  }

  onInput1FocusOut() {
    if (this.input1.nativeElement.value < 750) {
      this.input1.nativeElement.value = 750;
    }
    if (this.input1.nativeElement.value > 12000) {
      this.input1.nativeElement.value = 12000;
    }
  }

  onImageDragStart(event) {
    return false;
  }
  onDragStart(event) {
    if (event.touches) {
      this.mousePosition = event.touches[0].clientX;
    } else {
      this.mousePosition = event.pageX;
    }

    this.pointerGrabbed = true;
    this.initialPointerPosition = this.pointer.nativeElement.offsetLeft;
  }

  @HostListener("document:mousemove", ["$event"])
  @HostListener("document:touchmove", ["$event"])
  onMouseMove(event) {
    if (this.pointerGrabbed) {
      this.onDrag(event);
    }
  }
  @HostListener("document:mouseup", ["$event"])
  @HostListener("document:touchend", ["$event"])
  onMouseUp(event) {
    if (this.pointerGrabbed) {
      this.pointerGrabbed = false;
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    var left =
      this.input1.nativeElement.value * 0.0088888888888888889 -
      -6.666666666666667;

    var offset = 24;

    if (this.input1.nativeElement.value < 750) {
      left = 0;
    }
    if (this.input1.nativeElement.value > 12000) {
      left = 100;
      offset = 28;
    }
    this.pointer.nativeElement.style.left =
      "calc(" + left + "% - " + offset + "px)";
  }

  onDrag(event) {
    let currentMousePosition = 0;

    if (event.touches) {
      currentMousePosition = event.touches[0].clientX;
    } else {
      currentMousePosition = event.pageX;
    }

    if (currentMousePosition === 0) {
      return;
    }

    const offset = currentMousePosition - this.mousePosition;
    let newPosition = this.initialPointerPosition + offset;

    if (newPosition < -26) {
      newPosition = -26;
    }
    if (
      newPosition >
      this.pointer.nativeElement.parentElement.offsetWidth - 26
    ) {
      newPosition = this.pointer.nativeElement.parentElement.offsetWidth - 26;
    }
    this.pointer.nativeElement.style.left = newPosition + "px";

    var leftPercent =
      ((newPosition + 26) * 100) /
      this.pointer.nativeElement.parentElement.offsetWidth;

    var inputValue = (leftPercent * 11250) / 100 + 750;

    this.input1.nativeElement.value = parseInt(inputValue.toString(), 10);
  }
}
