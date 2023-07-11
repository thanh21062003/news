import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post/Post.service';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
  // Khai báo biến để lưu thông tin chi tiết bài viết
  public postDetail: any = {};
  // public postRelated: any = [];
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    // Lấy id của bài viết từ route
    const id: any = this.route.snapshot.paramMap.get('id');

    // Gọi service để lấy thông tin chi tiết bài viết và gán vào biến post
    this.postService.GetOnePosts(id).subscribe((data) => this.postDetail = data)
  }
}
