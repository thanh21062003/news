import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CategoriesService } from 'src/app/services/category/categories.service';
import { HashtagService } from 'src/app/services/hashtags/hashtag.service';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post/Post.service';
import axios from 'axios';
@Component({
  selector: 'app-managementpostadd',
  templateUrl: './managementpostadd.component.html',
  styleUrls: ['./managementpostadd.component.scss']
})
export class ManagementpostaddComponent implements OnInit {
  public listCates: any[] = []
  public listTags: any[] = []
  public imageUrl: any;
  validateForm!: UntypedFormGroup;

  constructor(
    private fb: FormBuilder,
    private CategoriesService: CategoriesService,
    private HashtagService: HashtagService,
    private PostService: PostService,
    private message: NzMessageService,
    private router: Router
  ) {
    this.CategoriesService.GetAllCategories().subscribe(({ data }: any) => {
      this.listCates = data;
    });
    this.HashtagService.GetAllHashtag().subscribe(({ data }: any) => {
      this.listTags = data;
    });
  }
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
      const postData: any = {
        title: this.validateForm.value.title,
        content: this.validateForm.value.content,
        author: this.validateForm.value.author,
        tags: this.validateForm.value.tags,
        CategoryId: this.validateForm.value.CategoryId,
        images: this.imageUrl
      };
      this.message.loading('đang xử lý', { nzDuration: 2500 });
      setTimeout(async () => {
        try {
          const response: any = await this.PostService.CreatePosts(postData).toPromise();
          // xử lý sau khi thêm thành công
          if (response) {
            this.message.success(response.message);
            this.validateForm.reset();
            this.router.navigate(['/admin/posts']);
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
  index = 0;
  async addHashtag(input: HTMLInputElement) {
    // try {
    //   const response: any = await this.HashtagService.CreateHashtag(input.value).toPromise();
    //   // xử lý sau khi liên hệ thành công
    //   if (response) {
    //     this.message.success(response.message);
    //     this.validateForm.reset();
    //   }
    // } catch (error: any) {
    //   this.message.error(error.error.message);
    //   // xử lý sau khi liên hệ thất bại
    // }
  }
  async addCate(input: HTMLInputElement) {
 
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      content: [null, [Validators.required]],
      author: [null, [Validators.required]],
      tags: [null, [Validators.required]],
      CategoryId: [null, [Validators.required]],
    });
  }
}



