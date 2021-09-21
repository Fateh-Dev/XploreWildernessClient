import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XplorerHistoryComponent } from './xplorer-history.component';

describe('XplorerHistoryComponent', () => {
  let component: XplorerHistoryComponent;
  let fixture: ComponentFixture<XplorerHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XplorerHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XplorerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
