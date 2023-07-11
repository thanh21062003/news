import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { AboutService } from 'src/app/services/about/About.service';
import axios from 'axios';
@Component({
  selector: 'app-management-aboutsadd',
  templateUrl: './management-aboutsadd.component.html',
  styleUrls: ['./management-aboutsadd.component.scss']
})
export class ManagementAboutsaddComponent {
  public imageUrl: any;
  constructor(
    private fb: UntypedFormBuilder,
    private aboutService: AboutService,
    private message: NzMessageService,
    private router: Router
  ) { }
  validateForm!: UntypedFormGroup;
  async submitForm() {
    if (this.validateForm.valid) {
    const fileInput: any = document.getElementById('fileInput');
    if (this.validateForm.value) {
      const cloud_name = "dpy2w5vus";
      const upload_preset = "demo_upload";
      const formData = new FormData();
      const file = fileInput.files[0];
      formData.append(`file`, file);
      formData.append('upload_preset', upload_preset);
      formData.append('cloud_name', cloud_name);
      formData.append('folder', 'duancanhan');
      const res = await axios
        .post(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, formData)
        .then(res => res.data);
      this.imageUrl = res.secure_url;
      console.log(this.imageUrl)
      const postData: any = {
        name: this.validateForm.value.name,
        email: this.validateForm.value.email,
        phone: this.validateForm.value.phone,
        address: this.validateForm.value.address,
        description: this.validateForm.value.description,
        image: this.imageUrl
      };
      this.message.loading('đang xử lý', { nzDuration: 2500 });
      setTimeout(async () => {
        try {
          const response: any = await this.aboutService.CreateAbout(postData).toPromise();
          // xử lý sau khi thêm thành công
          if (response) {
            this.message.success(response.message);
            this.validateForm.reset();
            this.router.navigate(['/admin/abouts']);
          }
        } catch (error: any) {
          this.message.error(error.error.message);
          // xử lý sau khi thêm thất bại
        }
      }, 2600);
    }
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
      phone: [null, [Validators.required]],
      address: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }
}
