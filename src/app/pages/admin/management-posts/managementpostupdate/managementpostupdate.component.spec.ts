import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementpostupdateComponent } from './managementpostupdate.component';

describe('ManagementpostupdateComponent', () => {
  let component: ManagementpostupdateComponent;
  let fixture: ComponentFixture<ManagementpostupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementpostupdateComponent]
    });
    fixture = TestBed.createComponent(ManagementpostupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
