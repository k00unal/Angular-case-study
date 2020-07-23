import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dynamic-div-onscroll',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <h1>Scroll the page to Add Divs</h1>
          <div class="card" id="content" (window:scroll)="onWindowScroll()">
            <div
              class="card-body"
              id="contentInside"
              *ngFor="let container of containers; let i = index"
            >
              <p class="card-title pr-5">click the button</p>
              <button
                type="button"
                class="btn btn-outline-primary float-right"
                style="width: inherit;"
                id="{{ i }}"
                (click)="popup($event)"
              >
                {{ i }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      #content {
        width: 100%;
        height: 1990px;
        // border:1px solid black;
        overflow-y: scroll;
      }
      #contentInside {
        width: 500px;
        height: 70px;
        margin: 7px;
        border: 1px solid black;
        display: inline-flex;
        padding: 5px;
      }
    `,
  ],
})
export class DynamicDivOnscrollComponent implements OnInit {
  containers = [];

  constructor() {}
  ngOnInit(): void {}

  @HostListener('window:scroll', []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    //console.log(verticalOffset);
    this.containers.push(this.containers.length);
  }

  popup(event) {
    var html = event.target.innerHTML;
    //console.log(html)
    alert(html);
  }
}
