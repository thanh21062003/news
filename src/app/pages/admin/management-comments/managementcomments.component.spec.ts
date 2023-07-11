import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementcommentsComponent } from './managementcomments.component';

describe('ManagementcommentsComponent', () => {
  let component: ManagementcommentsComponent;
  let fixture: ComponentFixture<ManagementcommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementcommentsComponent]
    });
    fixture = TestBed.createComponent(ManagementcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
