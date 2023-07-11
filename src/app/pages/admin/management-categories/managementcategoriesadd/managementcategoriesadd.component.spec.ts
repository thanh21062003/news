import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementcategoriesaddComponent } from './managementcategoriesadd.component';

describe('ManagementcategoriesaddComponent', () => {
  let component: ManagementcategoriesaddComponent;
  let fixture: ComponentFixture<ManagementcategoriesaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementcategoriesaddComponent]
    });
    fixture = TestBed.createComponent(ManagementcategoriesaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
