import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrelatedPostsComponent } from './listrelated-posts.component';

describe('ListrelatedPostsComponent', () => {
  let component: ListrelatedPostsComponent;
  let fixture: ComponentFixture<ListrelatedPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListrelatedPostsComponent]
    });
    fixture = TestBed.createComponent(ListrelatedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
