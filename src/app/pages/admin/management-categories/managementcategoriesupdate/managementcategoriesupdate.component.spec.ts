import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementcategoriesupdateComponent } from './managementcategoriesupdate.component';

describe('ManagementcategoriesupdateComponent', () => {
  let component: ManagementcategoriesupdateComponent;
  let fixture: ComponentFixture<ManagementcategoriesupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementcategoriesupdateComponent]
    });
    fixture = TestBed.createComponent(ManagementcategoriesupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
