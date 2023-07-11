import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ContactService } from 'src/app/services/contacts/Contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  constructor(
    private fb: UntypedFormBuilder,
    private message: NzMessageService,
    private ContactService: ContactService,
  ) { }
  validateForm!: UntypedFormGroup;
  async submitForm() {
    if (this.validateForm.valid) {
      this.message.loading('đang xử lý', { nzDuration: 2500 });
      setTimeout(async () => {
        try {
          const response: any = await this.ContactService.CreateContact(this.validateForm.value).toPromise();
          // xử lý sau khi liên hệ thành công
          if (response) {
            this.message.success(response.message);
            this.validateForm.reset();
          }
        } catch (error: any) {
          this.message.error(error.error.message);
          // xử lý sau khi liên hệ thất bại
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
      phone: [null, [Validators.required]],
      address: [null, [Validators.required]],
      support: [null, [Validators.required]],
    });
  }
}
