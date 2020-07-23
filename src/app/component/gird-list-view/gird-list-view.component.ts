import { Component, OnInit } from '@angular/core';
import { MyOrderByPipe } from '../shared/sort.pipe';

@Component({
  selector: 'app-gird-list-view',
  templateUrl: './gird-list-view.component.html',
  styleUrls: ['./gird-list-view.component.scss'],
})
export class GirdListViewComponent implements OnInit {
  constructor(private orderPipe: MyOrderByPipe) {
    console.log('order by price');
    console.log(this.orderPipe.transform(this.items, 'price'));
  }

  ngOnInit() {}
  isGrid;

  items = [
    { name: 'Card Item', price: 1 },
    { name: 'Card Item', price: 2 },
    { name: 'Card Item', price: 3 },
    { name: 'Card Item', price: 4 },
    { name: 'Card Item', price: 5 },
    { name: 'Card Item', price: 6 },
    { name: 'Card Item', price: 7 },
    { name: 'Card Item', price: 8 },
    { name: 'Card Item', price: 9 },
    { name: 'Card Item', price: 10 },
    { name: 'Card Item', price: 11 },
    { name: 'Card Item', price: 12 },
    { name: 'Card Item', price: 13 },
    { name: 'Card Item', price: 14 },
    { name: 'Card Item', price: 15 },
    { name: 'Card Item', price: 16 },
    { name: 'Card Item', price: 17 },
    { name: 'Card Item', price: 18 },
    { name: 'Card Item', price: 19 },
    { name: 'Card Item', price: 20 },
    { name: 'Card Item', price: 21 },
    { name: 'Card Item', price: 22 },
    { name: 'Card Item', price: 23 },
    { name: 'Card Item', price: 24 },
    { name: 'Card Item', price: 25 },
    { name: 'Card Item', price: 26 },
    { name: 'Card Item', price: 27 },
    { name: 'Card Item', price: 28 },
    { name: 'Card Item', price: 29 },
    { name: 'Card Item', price: 30 },
    { name: 'Card Item', price: 31 },
    { name: 'Card Item', price: 32 },
    { name: 'Card Item', price: 33 },
    { name: 'Card Item', price: 34 },
    { name: 'Card Item', price: 35 },
    { name: 'Card Item', price: 36 },
    { name: 'Card Item', price: 37 },
    { name: 'Card Item', price: 38 },
    { name: 'Card Item', price: 39 },
    { name: 'Card Item', price: 40 },
  ];

  lowToHigh(event) {
    this.reverse = false;
  }
  highToLow(event) {
    this.reverse = true;
  }

  order = 'price';
  reverse = false;
}
