import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ContactService } from 'src/app/services/contacts/Contact.service';
import IContact from 'src/app/types/contact';

@Component({
  selector: 'app-managementcontacts',
  templateUrl: './managementcontacts.component.html',
  styleUrls: ['./managementcontacts.component.scss']
})
export class ManagementcontactsComponent {
  public listOfData: IContact[] = []
  constructor(
    private ContactService: ContactService,
    private message: NzMessageService
  ) {
    this.ContactService.GetAllContact().subscribe(({ data }: any) => {
      this.listOfData = data
    })
  }

  async deleteRow(id: string) {
    this.message.loading('đang xóa', { nzDuration: 2500 })
    setTimeout(async () => {
      try {
        // call api xóa
        const response: any = await this.ContactService.RemoveContact(id).toPromise();
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
