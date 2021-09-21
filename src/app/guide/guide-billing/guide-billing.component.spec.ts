import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideBillingComponent } from './guide-billing.component';

describe('GuideBillingComponent', () => {
  let component: GuideBillingComponent;
  let fixture: ComponentFixture<GuideBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
