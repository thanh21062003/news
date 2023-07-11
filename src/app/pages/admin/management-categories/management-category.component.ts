import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/category/categories.service';
import ICategory from 'src/app/types/category';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-management-category',
  templateUrl: './management-category.component.html',
  styleUrls: ['./management-category.component.scss']
})
export class ManagementCategoryComponent {
  public listOfData: ICategory[] = []
  constructor(
    private CategoryService: CategoriesService,
    private message: NzMessageService
  ) {
    this.CategoryService.GetAllCategories().subscribe(({ data }: any) => {
      this.listOfData = data
    })
  }

  async deleteRow(id: string) {
    this.message.loading('đang xóa', { nzDuration: 2500 })
    setTimeout(async () => {
      try {
        // call api xóa
        const response: any = await this.CategoryService.RemoveCategories(id).toPromise();
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
