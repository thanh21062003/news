import { Component } from '@angular/core';
import { AboutService } from 'src/app/services/about/About.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import IAbout from 'src/app/types/about';

@Component({
  selector: 'app-management-abouts',
  templateUrl: './management-abouts.component.html',
  styleUrls: ['./management-abouts.component.scss']
})
export class ManagementAboutsComponent {
  public listOfData: IAbout[] = []
  constructor(
    private AboutService: AboutService,
    private message: NzMessageService
  ) {
    this.AboutService.GetAllAbout().subscribe(({ data }: any) => {
      this.listOfData = data
    })
  }

  async deleteRow(id: string) {
    console.log(id)
    this.message.loading('đang xóa', { nzDuration: 2500 })
    setTimeout(async () => {
      try {
        // call api xóa
        const response: any = await this.AboutService.RemoveAbout(id).toPromise();
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
