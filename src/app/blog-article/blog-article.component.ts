import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { Clipboard } from "@angular/cdk/clipboard";
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

  twitterLink: string;
  articleLink: string;
  facebookLink: string;

  constructor(private _activatedRoute: ActivatedRoute, private router: Router, 
    private clipboard: Clipboard) { }

  async ngOnInit() {

    this._activatedRoute.params.subscribe((parameter) => {
      this.articleID = parameter.parameter;
      
      this.articleLink = "https://proudsmile.com.au/BlogArticle/" + this.articleID;
      this.twitterLink = "https://twitter.com/intent/tweet?text=" + this.articleLink;
      this.facebookLink = "https://www.facebook.com/plugins/share_button.php?href=" + this.articleLink + "&layout=button&size=small&mobile_iframe=true&width=60&height=20&appId";
    });

    try {

      //const response = await axios.get('https://proudsmileblog-app-tdioj.ondigitalocean.app/api/posts');
      const response = await axios.get(this.api_url + '/api/posts/' + this.articleID + '?populate=*', {
        headers: {
          Authorization:
          'Bearer b2afceb61de2072a688b5cc7be86131eeb940fdbff0aca5ade11c65376a047ee2e97c1af3ec8a3a1a860d9b588339677ae2dce9c4dea23226e3377ecd1edd8ee328a22fb9a0f1c7bffebb6acbbee87246320109326cc6eedb6f0c7e44f6b7f76f346d9ee93879eba75eddc9bacfdcf34bfc8932fd549f631cb0f64e4bcbedf59',
        },
      });
      this.post = response.data.data;

    } catch (error) {
      this.error = error;
    }

  }

  goBack() {
    this.router.navigate(["/", "Blog"]);
  }

  copyBlogArticleLink() {
    this.clipboard.copy(this.articleLink);
  }
}
