import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/category/categories.service';
@Component({
  selector: 'app-managementcategoriesadd',
  templateUrl: './managementcategoriesadd.component.html',
  styleUrls: ['./managementcategoriesadd.component.scss']
})
export class ManagementcategoriesaddComponent implements OnInit {
  
  constructor(
    private fb: UntypedFormBuilder,
    private CategoryService: CategoriesService,
    private message: NzMessageService,
    private router: Router
  ) { }
  validateForm!: UntypedFormGroup;
  
  async submitForm() {
    if (this.validateForm.valid) {
      this.message.loading('đang xử lý', { nzDuration: 2500 });
      setTimeout(async () => {
        try {
          const response: any = await this.CategoryService.CreateCategories(this.validateForm.value).toPromise();
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
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
    });
  }
}



