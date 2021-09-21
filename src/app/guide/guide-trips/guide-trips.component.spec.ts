import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideTripsComponent } from './guide-trips.component';

describe('GuideTripsComponent', () => {
  let component: GuideTripsComponent;
  let fixture: ComponentFixture<GuideTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
