import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CategoriesService } from 'src/app/services/category/categories.service';
import { HashtagService } from 'src/app/services/hashtags/hashtag.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post/Post.service';
import axios from 'axios';

@Component({
  selector: 'app-managementpostupdate',
  templateUrl: './managementpostupdate.component.html',
  styleUrls: ['./managementpostupdate.component.scss']
})
export class ManagementpostupdateComponent implements OnInit {
  public listCates: any[] = []
  public listTags: any[] = []
  public listPostOne: any = {}
  validateForm!: UntypedFormGroup;
  public imageUrl: any;

  constructor(
    private fb: UntypedFormBuilder,
    private CategoriesService: CategoriesService,
    private HashtagService: HashtagService,
    private PostService: PostService,
    private Router: ActivatedRoute,
    private message: NzMessageService,
    private router: Router
  ) {
    this.CategoriesService.GetAllCategories().subscribe(({ data }: any) => {
      this.listCates = data
    })
    this.HashtagService.GetAllHashtag().subscribe(({ data }: any) => {
      this.listTags = data
    })
    // Lấy id của bài viết từ route
    const id: any = this.Router.snapshot.paramMap.get('id');
    // Gọi service để lấy thông tin chi tiết bài viết và gán vào biến post
    this.PostService.GetOnePosts(id).subscribe(({ data }: any) => this.listPostOne = data
    )
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
        console.log(this.imageUrl)
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
          const id: any = this.Router.snapshot.paramMap.get('id');
          console.log(id)
          try {
            const response: any = await this.PostService.UpdatePosts(id!, postData).toPromise();
            // xử lý sau khi cập nhật thành công
            if (response) {
              this.message.success(response.message);
              this.validateForm.reset();
              this.router.navigate(['/admin/posts']);
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
  index = 0;
  async addHashtag(input: HTMLInputElement) {

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





