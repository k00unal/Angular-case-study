import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerServiceComponent } from './countdown-timer-service.component';

describe('CountdownTimerServiceComponent', () => {
  let component: CountdownTimerServiceComponent;
  let fixture: ComponentFixture<CountdownTimerServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownTimerServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
