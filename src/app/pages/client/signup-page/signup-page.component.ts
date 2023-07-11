import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/Auth.service';
import IUser from 'src/app/types/user';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  siteKey: string;
  validateForm!: UntypedFormGroup;
  constructor(
    private SignupService: AuthService,
    private fb: UntypedFormBuilder,
    private message: NzMessageService,
    private router: Router
  ) {
    this.siteKey = '6LemJzgmAAAAAHpLpso7D7bEgvBPtzNBUd8xgaGd'
  }
  async submitForm() {
    if (this.validateForm.valid) {
      this.message.loading('đang xử lý', { nzDuration: 2500 });
      setTimeout(async () => {
        try {
          const Data:any = {
            name: this.validateForm.value.name,
            email: this.validateForm.value.email,
            password: this.validateForm.value.password,
            confirmpassword: this.validateForm.value.confirmpassword,
          };
          const response: any = await this.SignupService.Signup(Data).toPromise();
          // xử lý sau khi đăng ký thành công
          if (response) {
            this.message.success(response.message);
            this.validateForm.reset();
            this.router.navigate(['/signin']);
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
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      confirmpassword: [null, [Validators.required]],
      recaptcha: [null, Validators.required]
    });
  }
}



