import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideInsuranceComponent } from './guide-insurance.component';

describe('GuideInsuranceComponent', () => {
  let component: GuideInsuranceComponent;
  let fixture: ComponentFixture<GuideInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
