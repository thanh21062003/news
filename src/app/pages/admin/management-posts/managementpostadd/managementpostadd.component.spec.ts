import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementpostaddComponent } from './managementpostadd.component';

describe('ManagementpostaddComponent', () => {
  let component: ManagementpostaddComponent;
  let fixture: ComponentFixture<ManagementpostaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementpostaddComponent]
    });
    fixture = TestBed.createComponent(ManagementpostaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
