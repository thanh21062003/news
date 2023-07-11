import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementAboutsaddComponent } from './management-aboutsadd.component';

describe('ManagementAboutsaddComponent', () => {
  let component: ManagementAboutsaddComponent;
  let fixture: ComponentFixture<ManagementAboutsaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementAboutsaddComponent]
    });
    fixture = TestBed.createComponent(ManagementAboutsaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
