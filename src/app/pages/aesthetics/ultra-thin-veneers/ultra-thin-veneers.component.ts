import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-ultra-thin-veneers",
  templateUrl: "./ultra-thin-veneers.component.html",
  styleUrls: ["./ultra-thin-veneers.component.scss"],
})
export class UltraThinVeneersComponent implements OnInit {
  
  constructor(private router: Router, private title: Title, private meta: Meta) { 
    this.title.setTitle("Ultra Thin Porcelain Veneers - Proud Smile Gold Coast");
    this.meta.addTags([{
      name: 'description',
      content: `Ultra thin veneers are made to cover your natural teeth with minimal or no preparation required to change the shape and colour of your teeth permanently.`
    }, { name: 'keywords', content: 'ultra thin veneers, ultra thin porcelain veneers, ultra thin dental veneers' }]);
  }

  ngOnInit(): void {
  }


  goToLink(url: string) {
    window.open(url, "_blank");
  }

  seeGallery() {
    this.router.navigate(["/", "BeforeAndAfter"]);
  }
}
