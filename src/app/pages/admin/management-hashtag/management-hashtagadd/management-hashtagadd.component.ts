import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/category/categories.service';
import { HashtagService } from 'src/app/services/hashtags/hashtag.service';

@Component({
  selector: 'app-management-hashtagadd',
  templateUrl: './management-hashtagadd.component.html',
  styleUrls: ['./management-hashtagadd.component.scss']
})
export class ManagementHashtagaddComponent {
  constructor(
    private fb: UntypedFormBuilder,
    private HashtagService: HashtagService,
    private message: NzMessageService,
    private router: Router
  ) { }
  validateForm!: UntypedFormGroup;
  
  async submitForm() {
    if (this.validateForm.valid) {
      this.message.loading('đang xử lý', { nzDuration: 2500 });
      setTimeout(async () => {
        try {
          const response: any = await this.HashtagService.CreateHashtag(this.validateForm.value).toPromise();
          // xử lý sau khi đăng ký thành công
          if (response) {
            this.message.success(response.message);
            this.validateForm.reset();
            this.router.navigate(['/admin/tag']);
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
