import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-list-post-detail',
  templateUrl: './list-post-detail.component.html',
  styleUrls: ['./list-post-detail.component.scss']
})
export class ListPostDetailComponent {
  @Input() childData: any;
}