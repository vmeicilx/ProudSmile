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
  @ViewChild("input2") input2: ElementRef;
  @ViewChild("input3") input3: ElementRef;
  @ViewChild("pointer") pointer: ElementRef;
  pointerGrabbed: boolean = false;
  mousePosition: number;
  initialPointerPosition: number;
  depositNumber: number;
  monthly: number = 65.5;
  weekly: number = 15.63;
  constructor() {}

  imageObject: Array<object> = [
    {
      image: "../../../assets/homePage/instaFeed/1.png",
      thumbImage: "../../../assets/homePage/instaFeed/1.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/2.png",
      thumbImage: "../../../assets/homePage/instaFeed/2.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/3.png",
      thumbImage: "../../../assets/homePage/instaFeed/3.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/4.png",
      thumbImage: "../../../assets/homePage/instaFeed/4.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/5.png",
      thumbImage: "../../../assets/homePage/instaFeed/5.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/6.png",
      thumbImage: "../../../assets/homePage/instaFeed/6.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/7.png",
      thumbImage: "../../../assets/homePage/instaFeed/7.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/8.png",
      thumbImage: "../../../assets/homePage/instaFeed/8.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/9.png",
      thumbImage: "../../../assets/homePage/instaFeed/9.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/10.png",
      thumbImage: "../../../assets/homePage/instaFeed/10.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/11.png",
      thumbImage: "../../../assets/homePage/instaFeed/11.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/12.png",
      thumbImage: "../../../assets/homePage/instaFeed/12.png"
    },
    {
      image: "../../../assets/homePage/instaFeed/13.png",
      thumbImage: "../../../assets/homePage/instaFeed/13.png"
    }
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.depositNumber = 25;
    this.input1.nativeElement.value = 5000;
    this.input2.nativeElement.value = "25%";
    this.oninput1();
    window.addEventListener("touchmove", this.preventBehavior.bind(this), {
      passive: false
    });
  }

  preventBehavior(e) {
    console.log(this.pointerGrabbed);
    if (this.pointerGrabbed) {
      e.preventDefault();
    }
  }

  onDepositClick(value) {
    this.depositNumber = value;
    this.input2.nativeElement.value = value + "%";
    this.doCalculation(this.input1.nativeElement.value);
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
      this.doCalculation(750);
    } else if (this.input1.nativeElement.value > 12000) {
      left = 100;
      this.doCalculation(12000);
    } else {
      this.doCalculation(this.input1.nativeElement.value);
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

    this.doCalculation(this.input1.nativeElement.value);
  }

  doCalculation(amount: number) {
    this.input3.nativeElement.value = (amount * this.depositNumber) / 100;
  }

  calculatorClick() {
    this.monthly =
      Math.round(
        (this.input3.nativeElement.value / 20 + Number.EPSILON) * 100
      ) / 100;
    this.weekly =
      Math.round(
        (this.input3.nativeElement.value / 80 + Number.EPSILON) * 100
      ) / 100;
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
