import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {
  @ViewChild('comments', { static: true }) comments!: ElementRef;
  constructor(
    private fb: UntypedFormBuilder,
  ) { }
  validateForm!: UntypedFormGroup;
  async submitForm() {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
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
      content: [null, [Validators.required]],
      // remember: [true]
    });
    (window as any).FB.XFBML.parse(this.comments.nativeElement);
  }
}


