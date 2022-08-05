import { Component, HostListener, OnInit } from '@angular/core';
import { BlogDataService } from 'src/services/blog-data.service';
import MagicGrid from "magic-grid";
import { Router } from '@angular/router';
import axios from 'axios';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  displayFirst: boolean;
  displaySecond: boolean;
  displayThird: boolean;
  displayFourth: boolean;
  displayLeft: boolean;
  displayRight: boolean;
  displayMore: boolean;
  firstText: string;
  secondText: string;
  thirdText: string;
  fourthText: string;
  displayPages: Array<any>;
  posts: Array<any>;
  filteredPosts: Array<any>;
  siteHeader: Array<any>;
  categories: Array<any> = [{ attributes: { name: "All"}}];
  currentCategory: string = "All";
  magicGrid: any;
  containerOff: boolean;
  numberOfPages: number;
  error = null;

  currentPage: number = 1;

  articlePerPage = 6;

  api_url = "https://proudsmileblog-app-tdioj.ondigitalocean.app";


  constructor(private router: Router) {
  }

  async ngOnInit() {

    try {

      const response = await axios.get(this.api_url + '/api/posts?populate=*', {
        headers: {
          Authorization:
          'Bearer b2afceb61de2072a688b5cc7be86131eeb940fdbff0aca5ade11c65376a047ee2e97c1af3ec8a3a1a860d9b588339677ae2dce9c4dea23226e3377ecd1edd8ee328a22fb9a0f1c7bffebb6acbbee87246320109326cc6eedb6f0c7e44f6b7f76f346d9ee93879eba75eddc9bacfdcf34bfc8932fd549f631cb0f64e4bcbedf59',
        },
      });
      this.posts = response.data.data;

      const categoriesResponse = await axios.get(this.api_url + '/api/categories?populate=*', {
        headers: {
          Authorization:
          'Bearer b2afceb61de2072a688b5cc7be86131eeb940fdbff0aca5ade11c65376a047ee2e97c1af3ec8a3a1a860d9b588339677ae2dce9c4dea23226e3377ecd1edd8ee328a22fb9a0f1c7bffebb6acbbee87246320109326cc6eedb6f0c7e44f6b7f76f346d9ee93879eba75eddc9bacfdcf34bfc8932fd549f631cb0f64e4bcbedf59',
        },
      });
      categoriesResponse.data.data.sort((a,b) => a.id > b.id ? 1 : -1);
      this.categories = this.categories.concat(categoriesResponse.data.data);

      this.numberOfPages = this.posts.length / this.articlePerPage;
      this.filteredPosts = this.posts;
      this.filteredPosts = this.filteredPosts.slice((this.currentPage - 1) * this.articlePerPage, this.currentPage * this.articlePerPage);
      
      this.filteredPosts.sort((a,b) => a.id > b.id ? 1 : -1);
      this.currentCategory = "All";
      
      this.setDisplayPages();
      
    } catch (error) {
      this.error = error;
    }

  }

  ngAfterViewInit(): void {
    (
      document.documentElement.getElementsByTagName(
        "app-blog"
      )[0] as HTMLElement
    ).style.overflow = "hidden";

    setTimeout(() => {
      this.magicGrid = new MagicGrid({
        container: "#container",
        items: this.filteredPosts.length,
        animate: true
      });
      this.magicGrid.listen();
      this.magicGrid.positionItems();
  }, 300)
  }

  @HostListener('window:load')
  onLoad() {

    
  }

  onArticlePage(articleId: string) {
    this.router.navigate(["/", "BlogArticle", articleId]);
  }

  
  onCategoryClick(categoryTitle:string) {
    this.containerOff = true;
    this.currentCategory = categoryTitle;

    this.currentPage = 1;

    if(this.currentCategory === "All") {
      this.filteredPosts = this.posts;
    }
    else {
      this.filteredPosts = this.posts.filter(post => post.attributes.categories.data[0].attributes.name === this.currentCategory);
    }
    this.numberOfPages = this.filteredPosts.length / this.articlePerPage;
    this.filteredPosts = this.filteredPosts.slice((this.currentPage - 1) * this.articlePerPage, this.currentPage * this.articlePerPage);
    
    this.filteredPosts.sort((a,b) => a.id > b.id ? 1 : -1);
    this.setDisplayPages();

    setTimeout(() => {

      if(this.filteredPosts.length > 0) {
        this.magicGrid = new MagicGrid({
          container: "#container", // Required. Can be a class, id, or an HTMLElement.
          items: this.filteredPosts.length, // For a grid with 20 items. Required for dynamic content.
          animate: true, // Optional.,
        });
    
        this.magicGrid.listen();
        this.magicGrid.positionItems();
      }
      this.containerOff = false;
      
  
    }, 300)

    
  }

  setDisplayPages() {
    this.displayFirst = this.numberOfPages > 1;
    this.displaySecond = this.numberOfPages > 1;
    this.displayThird = this.numberOfPages > 2;
    this.displayFourth = this.numberOfPages > 3;
    this.displayLeft = this.currentPage > 1 && this.numberOfPages > 4;
    this.displayRight = this.currentPage < this.numberOfPages && this.numberOfPages > 4;
    this.firstText = this.currentPage.toString();
    this.secondText = (this.currentPage + 1).toString();
    this.thirdText = (this.currentPage + 2).toString();
    this.fourthText = (this.currentPage + 3).toString();
    this.displayMore = this.numberOfPages > 4;
    if( this.displayMore) {
      this.fourthText = this.numberOfPages.toString();
    }
  }
}
