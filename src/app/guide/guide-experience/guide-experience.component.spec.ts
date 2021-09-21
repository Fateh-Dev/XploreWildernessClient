import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideExperienceComponent } from './guide-experience.component';

describe('GuideExperienceComponent', () => {
  let component: GuideExperienceComponent;
  let fixture: ComponentFixture<GuideExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
