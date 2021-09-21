import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideSettingsComponent } from './guide-settings.component';

describe('GuideSettingsComponent', () => {
  let component: GuideSettingsComponent;
  let fixture: ComponentFixture<GuideSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
