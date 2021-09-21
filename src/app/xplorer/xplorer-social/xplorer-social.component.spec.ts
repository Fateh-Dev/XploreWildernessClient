import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XplorerSocialComponent } from './xplorer-social.component';

describe('XplorerSocialComponent', () => {
  let component: XplorerSocialComponent;
  let fixture: ComponentFixture<XplorerSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XplorerSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XplorerSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
