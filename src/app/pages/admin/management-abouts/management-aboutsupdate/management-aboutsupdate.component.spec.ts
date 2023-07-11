import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementAboutsupdateComponent } from './management-aboutsupdate.component';

describe('ManagementAboutsupdateComponent', () => {
  let component: ManagementAboutsupdateComponent;
  let fixture: ComponentFixture<ManagementAboutsupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementAboutsupdateComponent]
    });
    fixture = TestBed.createComponent(ManagementAboutsupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
