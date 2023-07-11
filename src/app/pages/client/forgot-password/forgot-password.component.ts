import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/Auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  isVisible = false;
  validateForm!: UntypedFormGroup;
  constructor(
    private ForgotPasswordService: AuthService,
    private fb: UntypedFormBuilder,
    private message: NzMessageService
  ) { }
  showModal(): void {
    this.isVisible = true;
  }

  async handleOk() {
    await this.message.loading('đang xử lý', { nzDuration: 2500 });
    setTimeout(async () => {
      try {
        const response: any = await this.ForgotPasswordService.ForgotPassword(this.validateForm.value).toPromise();
        if (response) {
          // xử lý sau khi forgot thành công
          this.message.success(response.message);
          this.validateForm.reset();
        }
      } catch (error: any) {
        // xử lý sau khi forgot thất bại
        this.message.error(error.error.message);
      }
    }, 2600);
    this.isVisible = false;
  }
  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
    });
  }
}
