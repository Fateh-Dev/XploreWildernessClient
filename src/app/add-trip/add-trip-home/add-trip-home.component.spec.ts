import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTripHomeComponent } from './add-trip-home.component';

describe('AddTripHomeComponent', () => {
  let component: AddTripHomeComponent;
  let fixture: ComponentFixture<AddTripHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTripHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTripHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
