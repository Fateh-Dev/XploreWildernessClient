import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XplorerHomeComponent } from './xplorer-home.component';

describe('XplorerHomeComponent', () => {
  let component: XplorerHomeComponent;
  let fixture: ComponentFixture<XplorerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XplorerHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XplorerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
