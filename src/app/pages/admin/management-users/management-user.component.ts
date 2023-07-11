import { Component } from '@angular/core';
import { UserService } from 'src/app/services/User/User.service';
import IUser from 'src/app/types/user';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-management-user',
  templateUrl: './management-user.component.html',
  styleUrls: ['./management-user.component.scss']
})
export class ManagementUserComponent {
  public listOfData: IUser[] = []
  constructor(
    private UserService: UserService,
    private message: NzMessageService
  ) {
    this.UserService.GetAllUser().subscribe(({ data }: any) => {
      this.listOfData = data
    })
  }

  async deleteRow(id: string) {
    this.message.loading('đang xóa', { nzDuration: 2500 })
    setTimeout(async () => {
      try {
        // call api xóa
        const response: any = await this.UserService.RemoveUser(id).toPromise();
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
