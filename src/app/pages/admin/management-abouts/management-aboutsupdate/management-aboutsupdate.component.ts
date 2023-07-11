import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AboutService } from 'src/app/services/about/About.service';
import axios from 'axios';
@Component({
  selector: 'app-management-aboutsupdate',
  templateUrl: './management-aboutsupdate.component.html',
  styleUrls: ['./management-aboutsupdate.component.scss']
})
export class ManagementAboutsupdateComponent {
  public listabout: any = {}
  public imageUrl: any;
  constructor(
    private fb: UntypedFormBuilder,
    private AboutService: AboutService,
    private Router: ActivatedRoute,
    private message: NzMessageService,
    private router: Router
  ) {
    // Lấy id của bài viết từ route
    const id: any = this.Router.snapshot.paramMap.get('id');
    console.log(id)
    // Gọi service để lấy thông tin chi tiết bài viết và gán vào biến post
    this.AboutService.GetOneAbout(id).subscribe(({ data }: any) => this.listabout = data)
  }
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
          const id: any = this.Router.snapshot.paramMap.get('id');
          console.log(id)
          try {
            const response: any = await this.AboutService.UpdateAbout(id!, postData).toPromise();
            // xử lý sau khi cập nhật thành công
            if (response) {
              this.message.success(response.message);
              this.validateForm.reset();
              this.router.navigate(['/admin/abouts']);
            }
          } catch (error: any) {
            this.message.error(error.error.message);
            // xử lý sau khi cập nhật thất bại
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
