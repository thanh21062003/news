import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaboutComponent } from './listabout.component';

describe('ListaboutComponent', () => {
  let component: ListaboutComponent;
  let fixture: ComponentFixture<ListaboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaboutComponent]
    });
    fixture = TestBed.createComponent(ListaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
