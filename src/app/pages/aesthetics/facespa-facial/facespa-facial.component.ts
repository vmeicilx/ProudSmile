import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-facespa-facial',
  templateUrl: './facespa-facial.component.html',
  styleUrls: ['./facespa-facial.component.scss']
})
export class FacespaFacialComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { 
    this.title.setTitle("FaceSpa Dermal Aesthetics | Not Just Smiles | Proud Smile");
    this.meta.addTags([{
      name: 'description',
      content: `At Proud Smile we also offer full scope facial treatments. Signature Facials, peels, skin needling, LED Light Therapy and more. Now you'll love the dentist.`
    }, { name: 'keywords', content: 'oral facial and implant surgery, dental facial aesthetics, facial implants gold coast' }]);
  }

  ngOnInit(): void {
  }
  
  goToLink(url: string) {
    window.open(url, "_blank");
  }

}
