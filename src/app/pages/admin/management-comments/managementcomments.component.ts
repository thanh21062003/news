import { Component } from '@angular/core';
import { CommentService } from 'src/app/services/comments/Comment.service';
import IComment from 'src/app/types/comment';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-managementcomments',
  templateUrl: './managementcomments.component.html',
  styleUrls: ['./managementcomments.component.scss']
})
export class ManagementcommentsComponent {
  public listOfData: IComment[] = []
  constructor(
    private CommentService: CommentService,
    private message: NzMessageService
  ) {
    this.CommentService.GetAllComment().subscribe(({ data }: any) => {
      this.listOfData = data
    })
  }

  async deleteRow(id: string) {
    this.message.loading('đang xóa', { nzDuration: 2500 })
    setTimeout(async () => {
      try {
        // call api xóa
        const response: any = await this.CommentService.RemoveComment(id).toPromise();
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
