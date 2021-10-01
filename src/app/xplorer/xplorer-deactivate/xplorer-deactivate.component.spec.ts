import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XplorerDeactivateComponent } from './xplorer-deactivate.component';

describe('XplorerDeactivateComponent', () => {
  let component: XplorerDeactivateComponent;
  let fixture: ComponentFixture<XplorerDeactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XplorerDeactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XplorerDeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
