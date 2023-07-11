import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponentClient } from './header.component';

describe('HeaderComponentClient', () => {
  let component: HeaderComponentClient;
  let fixture: ComponentFixture<HeaderComponentClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponentClient]
    });
    fixture = TestBed.createComponent(HeaderComponentClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
