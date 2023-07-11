import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-listrelated-posts',
  templateUrl: './listrelated-posts.component.html',
  styleUrls: ['./listrelated-posts.component.scss']
})
export class ListrelatedPostsComponent {
  @Input() childData: any;
}
