import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementcontactsComponent } from './managementcontacts.component';

describe('ManagementcontactsComponent', () => {
  let component: ManagementcontactsComponent;
  let fixture: ComponentFixture<ManagementcontactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementcontactsComponent]
    });
    fixture = TestBed.createComponent(ManagementcontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
