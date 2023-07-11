import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementAboutsComponent } from './management-abouts.component';

describe('ManagementAboutsComponent', () => {
  let component: ManagementAboutsComponent;
  let fixture: ComponentFixture<ManagementAboutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementAboutsComponent]
    });
    fixture = TestBed.createComponent(ManagementAboutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
