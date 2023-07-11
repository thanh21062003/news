import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post/Post.service';
import IPost from 'src/app/types/post';

@Component({
  selector: 'app-listpost',
  templateUrl: './listpost.component.html',
  styleUrls: ['./listpost.component.scss']
})
export class ListpostComponent {
  public posts: IPost[] = []
  constructor(private postsetService: PostService) {
    this.postsetService.GetAllPosts().subscribe(({ data }: any) => {
      this.posts = data
      // console.log(this.posts)
    })
  }
}

