import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XplorerSettingsComponent } from './xplorer-settings.component';

describe('XplorerSettingsComponent', () => {
  let component: XplorerSettingsComponent;
  let fixture: ComponentFixture<XplorerSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XplorerSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XplorerSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
