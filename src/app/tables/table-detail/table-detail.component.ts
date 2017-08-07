import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bgr-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css']
})
export class TableDetailComponent implements OnInit {

  tableName: string;
  tableCreated = false;

  constructor() { }

  ngOnInit() {
  }

  onResetTable() {
    this.tableName = '';
  }

  // onUpdateTableName(event: Event) {
  //   this.tableName = (<HTMLInputElement>event.target).value;
  // }

}
