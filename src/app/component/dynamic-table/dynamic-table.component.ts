import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MyOrderByPipe } from '../shared/sort.pipe';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
})
export class DynamicTableComponent implements OnInit {
  title = 'JSON to Table Example';
  arrStudents: string[];
  constructor(
    private httpService: HttpClient,
    private orderPipe: MyOrderByPipe
  ) {
    console.log('order by id');
    //console.log(this.orderPipe.transform(this.arrStudents, 'id'));
  }

  ngOnInit() {
    this.httpService
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        (data) => {
          this.arrStudents = data as string[]; // FILL THE ARRAY WITH DATA.
          console.log(this.arrStudents[1]);
        },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      );
  }

  onSortClick(event) {
    this.reverse = !this.reverse;
  }

  order = 'id';
  reverse = true;
}
