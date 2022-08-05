import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-anxious-patients",
  templateUrl: "./anxious-patients.component.html",
  styleUrls: ["./anxious-patients.component.scss"]
})
export class AnxiousPatientsComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Anxious Dental Patients - Relax you're at Proud Smile");
    this.meta.addTags([{
      name: 'description',
      content: `For many people, a simple trip to the dentist can cause anxiety. At Proud Smile we take a different approach to help you overcome your fear. Sedation options available.`
    }]);
  }

  ngOnInit(): void {}
}
