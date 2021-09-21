import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XplorerBillingComponent } from './xplorer-billing.component';

describe('XplorerBillingComponent', () => {
  let component: XplorerBillingComponent;
  let fixture: ComponentFixture<XplorerBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XplorerBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XplorerBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
