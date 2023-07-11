import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementHashtagupdateComponent } from './management-hashtagupdate.component';

describe('ManagementHashtagupdateComponent', () => {
  let component: ManagementHashtagupdateComponent;
  let fixture: ComponentFixture<ManagementHashtagupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementHashtagupdateComponent]
    });
    fixture = TestBed.createComponent(ManagementHashtagupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
