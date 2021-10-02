import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPreferenceModalComponent } from './new-preference-modal.component';

describe('NewPreferenceModalComponent', () => {
  let component: NewPreferenceModalComponent;
  let fixture: ComponentFixture<NewPreferenceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPreferenceModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPreferenceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
