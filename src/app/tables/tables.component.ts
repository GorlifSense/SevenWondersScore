import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bgr-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  tables = 1;
  tableName = `
      overextension is required to view that
      what else can you do about helping those
      numbers of troops in Pakistani where rebels
      occupied the vast majority of population and hit
      disease to reflect any changes in view
  `;

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
