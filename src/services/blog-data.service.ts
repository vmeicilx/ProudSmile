import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  //make sure to set the guid in the URL, test it works in browser
  guid:string = "01b76da6-u"
  url:string = `https://api.aglty.io/${this.guid}/fetch/en-us/list/proudsmileblogposts`
  siteHeaderUrl:string = `https://api.aglty.io/${this.guid}/fetch/en-us/list/proudsmilesiteheader`
  categoriesUrl:string = `https://api.aglty.io/${this.guid}/fetch/en-us/list/proudsmileblogcategories`
  apikey:string = "defaultlive.8d0805d32306a43f1acd7c8eea7f0795c351b86c49a0e19431d795022d01bbbd"

  constructor(private http: HttpClient) { }

  getSiteHeader(){
    return this.http.get(this.siteHeaderUrl, {
      headers: {
        accept: "application/json",
        APIKey: this.apikey
      }
    })
  }

  getCategories(){
    return this.http.get(this.categoriesUrl, {
      headers: {
        accept: "application/json",
        APIKey: this.apikey
      }
    })
  }

  getBlogs(){
    return this.http.get(this.url, {
      headers: {
        accept: "application/json",
        APIKey: this.apikey
      }
    })
  }
}
