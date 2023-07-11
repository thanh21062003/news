import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HashtagService } from 'src/app/services/hashtags/hashtag.service';

@Component({
  selector: 'app-management-hashtagupdate',
  templateUrl: './management-hashtagupdate.component.html',
  styleUrls: ['./management-hashtagupdate.component.scss']
})
export class ManagementHashtagupdateComponent {
  public listCates: any = {}
  validateForm!: UntypedFormGroup;
  constructor(
    private fb: UntypedFormBuilder,
    private HashtagService: HashtagService,
    private Router: ActivatedRoute,
    private message: NzMessageService,
    private router: Router

  ) {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
    });
    // Lấy id của bài viết từ route
    const id: any = this.Router.snapshot.paramMap.get('id');
    console.log(id)
    // Gọi service để lấy thông tin chi tiết bài viết và gán vào biến post
    this.HashtagService.GetOneHashtag(id).subscribe(({ data }: any) => this.listCates = data
    )
  }
  async submitForm() {
    if (this.validateForm.valid) {
      this.message.loading('đang xử lý', { nzDuration: 2500 });
      setTimeout(async () => {
        const id: any = this.Router.snapshot.paramMap.get('id');
        console.log(id)
        try {
          const response: any = await this.HashtagService.UpdateHashtag(id!, this.validateForm.value).toPromise();
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

  }
}
