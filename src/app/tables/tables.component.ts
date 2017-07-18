import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bgr-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  tables = 1;
  tableName = '';

  constructor() { }

  ngOnInit() {
  }

  onCreateTable() {
    this.tables++;
  }

  onUpdateTableName(event: Event) {
    this.tableName = (<HTMLInputElement>event.target).value;
  }

}
