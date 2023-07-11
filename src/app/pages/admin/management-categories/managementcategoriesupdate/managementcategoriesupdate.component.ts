import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/category/categories.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-managementcategoriesupdate',
  templateUrl: './managementcategoriesupdate.component.html',
  styleUrls: ['./managementcategoriesupdate.component.scss']
})
export class ManagementcategoriesupdateComponent implements OnInit {
  public listCates: any = {}
  validateForm!: UntypedFormGroup;
  constructor(
    private fb: UntypedFormBuilder,
    private CategoriesService: CategoriesService,
    private Router: ActivatedRoute,
    private message: NzMessageService,
    private router: Router

  ) {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
    });
    // Lấy id của bài viết từ route
    const id: any = this.Router.snapshot.paramMap.get('id');
    // Gọi service để lấy thông tin chi tiết bài viết và gán vào biến post
    this.CategoriesService.GetOneCategories(id).subscribe(({ data }: any) => this.listCates = data
    )
  }
  async submitForm() {
    if (this.validateForm.valid) {
      this.message.loading('đang xử lý', { nzDuration: 2500 });
      setTimeout(async () => {
        const id: any = this.Router.snapshot.paramMap.get('id');
        try {
          const response: any = await this.CategoriesService.UpdateCategories(id!, this.validateForm.value).toPromise();
          // xử lý sau khi đăng ký thành công
          if (response) {
            this.message.success(response.message);
            this.validateForm.reset();
            this.router.navigate(['/admin/categories']);
          }
        } catch (error: any) {
          this.message.error(error.error.message);
          // xử lý sau khi đăng ký thất bại
        }
      }, 2600);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ngOnInit(): void {

  }
}




