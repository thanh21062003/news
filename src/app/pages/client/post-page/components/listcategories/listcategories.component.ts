import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/category/categories.service';
import { PostService } from 'src/app/services/post/Post.service';
import ICategory from 'src/app/types/category';
import IPost from 'src/app/types/post';
@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.scss']
})
export class ListcategoriesComponent {
  public categories: ICategory[] = []
  public posts: IPost[] = []
  constructor(
    private Caterories: CategoriesService,
    private Posts: PostService
  ) {
    this.Caterories.GetAllCategories().subscribe(({ data }: any) => {
      this.categories = data
      console.log(this.categories)
    })
    this.Posts.GetAllPosts().subscribe(({ data }: any) => {
      this.posts = data
      console.log(this.posts)
    })
  }
}