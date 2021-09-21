import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideVerificationComponent } from './guide-verification.component';

describe('GuideVerificationComponent', () => {
  let component: GuideVerificationComponent;
  let fixture: ComponentFixture<GuideVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
