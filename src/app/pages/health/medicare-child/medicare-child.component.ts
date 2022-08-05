import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-medicare-child",
  templateUrl: "./medicare-child.component.html"
})
export class MedicareChildComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Child Dental Benefit Schedule - Free Dental for Children");
    this.meta.addTags([{
      name: 'description',
      content: `Under the program, eligible children and teenagers receive up to $1026 per every 2 years to assist with the cost of preventative dentistry. Book Online Now.`
    }]);
  }

  ngOnInit(): void {}

  goToLink(url: string) {
    window.open(url, "_blank");
  }
  goToLinkWithotNewTab(url: string) {
    window.open(url, "_self");
  }
}
