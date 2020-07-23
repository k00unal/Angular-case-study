import { Component, OnInit, Input } from '@angular/core';
import { CountdownTimerService } from './countdown-timer.service';

@Component({
  selector: 'app-countdown-timer-service',
  templateUrl: './countdown-timer-service.component.html',
  styleUrls: ['./countdown-timer-service.component.scss'],
})
export class CountdownTimerServiceComponent implements OnInit {
  name = 'Countdown using services';

  constructor(public timerS: CountdownTimerService) {}

  ngOnInit() {
    this.timerS.newTimer();
    this.timerS.startTimer(1);
    this.timerS.newtotal = 900;
  }

  pause() {
    this.timerS.pauseTimer(1);
  }

  resume() {
    this.timerS.resumeTimer(1);
  }

  stop() {
    this.timerS.stopTimer(1);
  }

  // start() {
  //   this.timerS.startTimer(1);
  // }
}
