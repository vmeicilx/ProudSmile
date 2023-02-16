import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zoom-whitening',
  templateUrl: './zoom-whitening.component.html',
  styleUrls: ['./zoom-whitening.component.scss']
})
export class ZoomWhiteningComponent implements OnInit {

  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.title.setTitle("Zoom Teeth Whitening on the Gold Coast | Proud Smile Dental");
    this.meta.addTags([{
      name: 'description',
      content: `The most trusted teeth whitening system in the world is available at Proud Smile. Great value at $495, sit back and watch Netflix while your teeth get whiter.`
    }, { name: 'keywords', content: 'professional teeth whitening, teeth whitening gold coast, zoom teeth whitening gold coast' }]);
  }

  ngOnInit(): void {}

  seeUltraThin() {
    this.router.navigate(["/", "UltraThinVeneers"]);
    window.scrollTo(0, 0);
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
