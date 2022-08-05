import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-mouthguards",
  templateUrl: "./mouthguards.component.html",
  styleUrls: ["./mouthguards.component.scss"]
})
export class MouthguardsComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Custom Sports Mouthguard - Proud Smile Dental - Gold Coast");
    this.meta.addTags([{
      name: 'description',
      content: `A boil-and-bite type mouthguard is just not enough. We produce custom made mouthguard that will fit your teeth snugly to provide superior protection.`
    }, { name: 'keywords', content: 'mouth guard for teeth grinding, dental mouth guard, mouth guard for teeth grinding australia' }]);
  }

  ngOnInit(): void {}
}
