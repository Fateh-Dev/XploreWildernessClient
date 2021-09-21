import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XplorerInviteComponent } from './xplorer-invite.component';

describe('XplorerInviteComponent', () => {
  let component: XplorerInviteComponent;
  let fixture: ComponentFixture<XplorerInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XplorerInviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XplorerInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
