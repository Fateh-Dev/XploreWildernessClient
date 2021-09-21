import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XplorerVerificationComponent } from './xplorer-verification.component';

describe('XplorerVerificationComponent', () => {
  let component: XplorerVerificationComponent;
  let fixture: ComponentFixture<XplorerVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XplorerVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XplorerVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
