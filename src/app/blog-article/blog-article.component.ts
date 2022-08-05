import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
// import rtfToHTML from '@iarna/rtf-to-html';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {

  articleID: string;
  post: any;
  error = null;
  api_url = "https://proudsmileblog-app-tdioj.ondigitalocean.app";

  

  constructor(private _activatedRoute: ActivatedRoute, private router: Router) { }

  async ngOnInit() {

    this._activatedRoute.params.subscribe((parameter) => {
      this.articleID = parameter.parameter;
    });

    try {

      // const { data } = await axios.post('http://localhost:1337/api/auth/local', {
      //   identifier: 'vlad.meici@gmail.com',
      //   password: '!Alecsandru3',
      // });

      //const response = await axios.get('https://proudsmileblog-app-tdioj.ondigitalocean.app/api/posts');
      const response = await axios.get('http://localhost:1337/api/posts/' + this.articleID + '?populate=*', {
        headers: {
          Authorization:
          'Bearer a438f488efd591a865bb2ccbde898dbab64daabb8fe2ccfd3195d88d939d47ef0f9ac5a4442b2e300f58f06eb0455d594ed55d4df111a180adbc19fa2a47f522ecadb7d8c089574fe461035e9c41bd1150ac4b794acecd53163adb1bc6b9c15fe5f3ee15e3a059e5b8e9c5909ec2b206cb195b3b9154499a01aa175b1f68074a',
        },
      });
      this.post = response.data.data;

      // rtfToHtml.fromString(this.post.attributes.description, (err, html) => {
      //   console.log(html)
      //   // prints a document containing:
      //   // <p><strong>hi there</strong></p>
      // })
      
      // rtfToHTML.fromString(this.post.attributes.article, (err, html) => {
      //   console.log(html)
      //   // prints a document containing:
      //   // <p><strong>hi there</strong></p>
      // })

    } catch (error) {
      this.error = error;
    }

  }

  goBack() {
    this.router.navigate(["/", "Blog"]);
  }


}
