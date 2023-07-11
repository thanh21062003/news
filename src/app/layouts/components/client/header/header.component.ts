import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-header-client',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponentClient {

  selector: boolean = false;
  selectorDropdown() {
    this.selector = !this.selector;
  }
  selected: string = "Collections";
  isToggle: number = 1;

  ngOnInit(): void {}
  searchTerm: any;
  results: any;

  constructor(
    private http: HttpClient,
    private message: NzMessageService,
  ) { }

  search() {
    this.http.get<any>(`http://localhost:8080/api/post?title=${this.searchTerm}`).subscribe(
      ({ data }) => {
        if (data) {
          this.message.success('thành công')
          this.results = data;
        } else {
          this.results = [];
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
