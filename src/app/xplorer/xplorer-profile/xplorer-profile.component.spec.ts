import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XplorerProfileComponent } from './xplorer-profile.component';

describe('XplorerProfileComponent', () => {
  let component: XplorerProfileComponent;
  let fixture: ComponentFixture<XplorerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XplorerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XplorerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
