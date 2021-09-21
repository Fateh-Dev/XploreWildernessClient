import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XplorerFavoriteComponent } from './xplorer-favorite.component';

describe('XplorerFavoriteComponent', () => {
  let component: XplorerFavoriteComponent;
  let fixture: ComponentFixture<XplorerFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XplorerFavoriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XplorerFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
