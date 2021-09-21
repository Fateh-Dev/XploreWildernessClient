import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideDeactivateComponent } from './guide-deactivate.component';

describe('GuideDeactivateComponent', () => {
  let component: GuideDeactivateComponent;
  let fixture: ComponentFixture<GuideDeactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideDeactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideDeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
