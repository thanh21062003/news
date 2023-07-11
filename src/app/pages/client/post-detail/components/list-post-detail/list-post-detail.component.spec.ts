import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostDetailComponent } from './list-post-detail.component';

describe('ListPostDetailComponent', () => {
  let component: ListPostDetailComponent;
  let fixture: ComponentFixture<ListPostDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPostDetailComponent]
    });
    fixture = TestBed.createComponent(ListPostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
