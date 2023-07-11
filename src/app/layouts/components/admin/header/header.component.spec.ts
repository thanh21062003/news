import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponentAdmin } from './header.component';

describe('HeaderComponentAdmin', () => {
  let component: HeaderComponentAdmin;
  let fixture: ComponentFixture<HeaderComponentAdmin>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponentAdmin]
    });
    fixture = TestBed.createComponent(HeaderComponentAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
