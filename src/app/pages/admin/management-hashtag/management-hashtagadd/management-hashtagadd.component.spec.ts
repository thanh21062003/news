import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementHashtagaddComponent } from './management-hashtagadd.component';

describe('ManagementHashtagaddComponent', () => {
  let component: ManagementHashtagaddComponent;
  let fixture: ComponentFixture<ManagementHashtagaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementHashtagaddComponent]
    });
    fixture = TestBed.createComponent(ManagementHashtagaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
