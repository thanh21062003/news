import { Component } from '@angular/core';
import { HashtagService } from 'src/app/services/hashtags/hashtag.service';
import IhashTag from 'src/app/types/hashtag';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-management-hashtag',
  templateUrl: './management-hashtag.component.html',
  styleUrls: ['./management-hashtag.component.scss']
})
export class ManagementHashtagComponent {
  public listOfData: IhashTag[] = []
  constructor(
    private CategoryService: HashtagService,
    private message: NzMessageService
  ) {
    this.CategoryService.GetAllHashtag().subscribe(({ data }: any) => {
      this.listOfData = data
    })
  }

  async deleteRow(id: string) {
    this.message.loading('đang xóa', { nzDuration: 2500 })
    setTimeout(async () => {
      try {
        // call api xóa
        const response: any = await this.CategoryService.RemoveHashtag(id).toPromise();
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
