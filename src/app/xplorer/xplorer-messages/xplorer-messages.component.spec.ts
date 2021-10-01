import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XplorerMessagesComponent } from './xplorer-messages.component';

describe('XplorerMessagesComponent', () => {
  let component: XplorerMessagesComponent;
  let fixture: ComponentFixture<XplorerMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XplorerMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XplorerMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
