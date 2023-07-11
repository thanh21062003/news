import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponentClient } from './footer.component';

describe('FooterComponentClient', () => {
  let component: FooterComponentClient;
  let fixture: ComponentFixture<FooterComponentClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponentClient]
    });
    fixture = TestBed.createComponent(FooterComponentClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
