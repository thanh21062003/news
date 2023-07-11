import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { PostService } from 'src/app/services/post/Post.service';
import IPost from 'src/app/types/post';

@Component({
  selector: 'nz-demo-table-edit-cell',
  templateUrl: './management-post.component.html',
  styleUrls: ['./management-post.component.scss']
})
export class ManagementPostComponent implements OnInit {
  public listOfData: IPost[] = []
  constructor(
    private PostService: PostService,
    private message: NzMessageService
  ) {
    this.PostService.GetAllPosts().subscribe(({ data }: any) => {
      this.listOfData = data
    })
  }

  async deleteRow(id: string) {
    this.message.loading('đang xóa', { nzDuration: 2500 })
    setTimeout(async () => {
      try {
        // call api xóa
        const response: any = await this.PostService.RemovePosts(id).toPromise();
        this.message.success(response.message);
        this.listOfData = this.listOfData.filter(d => d._id !== id);
      } catch (error: any) {
        this.message.error(error.error.message);
        // xử lý sau khi xóa thất bại
      }
    }, 2600);
  }

  async ngOnInit() {

  }
}
