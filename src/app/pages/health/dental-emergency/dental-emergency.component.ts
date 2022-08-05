import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-dental-emergency",
  templateUrl: "./dental-emergency.component.html",
  styleUrls: ["./dental-emergency.component.scss"]
})
export class DentalEmergencyComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Emergency dentist in Gold Coast - Get Help Right Now");
    this.meta.addTags([{
      name: 'description',
      content: `If you have a broken tooth, an abscess, sporting injury or severe pain there’s only one thing you need and that is to be seen Right Now. Follow these tips depending until you get to us.`
    }, { name: 'keywords', content: 'emergency dental services, dental emergency gold coast, emergency dentist gold coast' }]);
  }

  ngOnInit(): void {}

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  goToLinkWithotNewTab(url: string) {
    window.open(url, "_self");
  }
}
