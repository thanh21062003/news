import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementHashtagComponent } from './management-hashtag.component';

describe('ManagementHashtagComponent', () => {
  let component: ManagementHashtagComponent;
  let fixture: ComponentFixture<ManagementHashtagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementHashtagComponent]
    });
    fixture = TestBed.createComponent(ManagementHashtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
