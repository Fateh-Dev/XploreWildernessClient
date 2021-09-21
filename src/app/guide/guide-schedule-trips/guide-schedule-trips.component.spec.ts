import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideScheduleTripsComponent } from './guide-schedule-trips.component';

describe('GuideScheduleTripsComponent', () => {
  let component: GuideScheduleTripsComponent;
  let fixture: ComponentFixture<GuideScheduleTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideScheduleTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideScheduleTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
