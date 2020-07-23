import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotatingtext',
  templateUrl: './rotatingtext.component.html',
  styleUrls: ['./rotatingtext.component.scss'],
})
export class RotatingtextComponent implements OnInit {
  constructor() {}
  flipped = false;

  flipIt() {
    this.flipped = !this.flipped;
  }

  ngOnInit() {
    setInterval(() => {
      this.flipIt();
    }, 1000);
  }
}
