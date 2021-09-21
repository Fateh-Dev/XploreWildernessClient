import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideHistoryTripsComponent } from './guide-history-trips.component';

describe('GuideHistoryTripsComponent', () => {
  let component: GuideHistoryTripsComponent;
  let fixture: ComponentFixture<GuideHistoryTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideHistoryTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideHistoryTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
