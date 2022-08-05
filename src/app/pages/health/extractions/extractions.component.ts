import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-extractions",
  templateUrl: "./extractions.component.html"
})
export class ExtractionsComponent implements OnInit {
  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.title.setTitle("Teeth Extractions Gold Coast - Get Help Right Now");
    this.meta.addTags([{
      name: 'description',
      content: `Though we’d rather you kept your natural teeth, there are some situations where a tooth needs to be extracted to ensure continued good oral health.`
    }, { name: 'keywords', content: 'wisdom teeth surgery, wisdom teeth removal surgery, wisdom teeth removal gold coast' }]);
  }

  ngOnInit(): void {}

  onImplantClick() {
    this.router.navigate(["/", "SingleTooth"]);
  }
}
