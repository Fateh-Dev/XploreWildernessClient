import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenceItemComponent } from './preference-item.component';

describe('PreferenceItemComponent', () => {
  let component: PreferenceItemComponent;
  let fixture: ComponentFixture<PreferenceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferenceItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
