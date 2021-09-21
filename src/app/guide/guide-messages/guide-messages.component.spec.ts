import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideMessagesComponent } from './guide-messages.component';

describe('GuideMessagesComponent', () => {
  let component: GuideMessagesComponent;
  let fixture: ComponentFixture<GuideMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
