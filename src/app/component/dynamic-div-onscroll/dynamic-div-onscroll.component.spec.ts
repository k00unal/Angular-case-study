import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDivOnscrollComponent } from './dynamic-div-onscroll.component';

describe('DynamicDivOnscrollComponent', () => {
  let component: DynamicDivOnscrollComponent;
  let fixture: ComponentFixture<DynamicDivOnscrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicDivOnscrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDivOnscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
