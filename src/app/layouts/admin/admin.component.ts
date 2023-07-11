import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(
    private router: Router,
    private message: NzMessageService,
  ) {
    const getlocal = localStorage.getItem('user');
    if (getlocal) {
      const check = JSON.parse(getlocal);
      if (check.role === 'admin') {
      } else {
        this.message.warning('bạn không có quyền truy cập vui lòng đăng nhập')
        this.router.navigate(['/signin']);
      }
    } else {
      this.message.warning('bạn chưa đăng nhập')
      this.router.navigate(['/signin']);
    }
  }
}
