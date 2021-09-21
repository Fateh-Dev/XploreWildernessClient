import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XplorerBookingComponent } from './xplorer-booking.component';

describe('XplorerBookingComponent', () => {
  let component: XplorerBookingComponent;
  let fixture: ComponentFixture<XplorerBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XplorerBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XplorerBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
