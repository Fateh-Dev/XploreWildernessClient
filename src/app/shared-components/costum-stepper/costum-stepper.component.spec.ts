import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumStepperComponent } from './costum-stepper.component';

describe('CostumStepperComponent', () => {
  let component: CostumStepperComponent;
  let fixture: ComponentFixture<CostumStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
