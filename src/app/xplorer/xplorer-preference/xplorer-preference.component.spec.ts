import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XplorerPreferenceComponent } from './xplorer-preference.component';

describe('XplorerPreferenceComponent', () => {
  let component: XplorerPreferenceComponent;
  let fixture: ComponentFixture<XplorerPreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XplorerPreferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XplorerPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
