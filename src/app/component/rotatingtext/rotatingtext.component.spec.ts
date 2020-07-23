import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingtextComponent } from './rotatingtext.component';

describe('RotatingtextComponent', () => {
  let component: RotatingtextComponent;
  let fixture: ComponentFixture<RotatingtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotatingtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotatingtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
