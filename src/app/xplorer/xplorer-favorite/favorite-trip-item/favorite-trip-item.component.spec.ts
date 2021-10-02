import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteTripItemComponent } from './favorite-trip-item.component';

describe('FavoriteTripItemComponent', () => {
  let component: FavoriteTripItemComponent;
  let fixture: ComponentFixture<FavoriteTripItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteTripItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteTripItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
