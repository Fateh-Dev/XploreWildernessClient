import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSwitchComponent } from './confirm-switch.component';

describe('ConfirmSwitchComponent', () => {
  let component: ConfirmSwitchComponent;
  let fixture: ComponentFixture<ConfirmSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
