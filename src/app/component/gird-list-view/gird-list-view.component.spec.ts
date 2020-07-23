import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirdListViewComponent } from './gird-list-view.component';

describe('GirdListViewComponent', () => {
  let component: GirdListViewComponent;
  let fixture: ComponentFixture<GirdListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirdListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirdListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
