import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementPostComponent } from './management-post.component';

describe('ManagementPostComponent', () => {
  let component: ManagementPostComponent;
  let fixture: ComponentFixture<ManagementPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementPostComponent]
    });
    fixture = TestBed.createComponent(ManagementPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
