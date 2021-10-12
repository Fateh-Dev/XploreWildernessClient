import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStepperNumberComponent } from './custom-stepper-number.component';

describe('CustomStepperNumberComponent', () => {
  let component: CustomStepperNumberComponent;
  let fixture: ComponentFixture<CustomStepperNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomStepperNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStepperNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
