import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnInit {
  constructor() {}
  //startTimer;

  ngOnInit(): void {}
  @Input() counter: number;
  @Input() interval: number = 1000;

  value;

  startTimer() {
    this.counter = 60;
    this.interval = 1000;
  }
  pauseTimer() {
    this.interval = 9000;
  }
  stopTimer() {
    this.counter = 0;
  }
}
