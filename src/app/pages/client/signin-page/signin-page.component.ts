import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/Auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
declare const FB: any;
@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  siteKey: string;
  user: any;
  loggedIn: any;
  constructor(
    private SigninService: AuthService,
    private fb: UntypedFormBuilder,
    private message: NzMessageService,
    private router: Router,
    private authService: SocialAuthService
  ) {
    this.siteKey = '6LemJzgmAAAAAHpLpso7D7bEgvBPtzNBUd8xgaGd'
  }
  async submitForm() {
    if (this.validateForm.valid) {
      this.message.loading('đang xử lý', { nzDuration: 2500 });
      setTimeout(async () => {
        const Data:any = {
          email: this.validateForm.value.email,
          password: this.validateForm.value.password,
        };
        try {
          const response: any = await this.SigninService.Signin(Data).toPromise();
          // xử lý sau khi đăng nhập thành công
          if (response) {
            this.message.success(response.message);
            localStorage.setItem('user', JSON.stringify(response.user));
            localStorage.setItem('accessToken', response.accessToken);
            this.validateForm.reset();
            if (response.user.role === 'admin') {
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate(['/']);
            }
          }

        } catch (error: any) {
          // xử lý sau khi đăng nhập thất bại
          this.message.error(error.error.message);
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
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      recaptcha: ['', Validators.required]
    });

    FB.init({
      appId: '6064438330321011', // replace with your app ID
      cookie: true,
      xfbml: true,
      version: 'v17.0' // replace with the latest version of the Graph API
    });
  }

  loginWithFacebook() {
    FB.login((response: any) => {
      if (response) {
        this.message.success(response.status);
        localStorage.setItem('accessToken', response.authResponse.accessToken);
        this.router.navigate(['/']);
      }
    });

    this.authService.authState.subscribe((user: any) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
}

