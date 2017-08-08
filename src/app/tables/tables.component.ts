import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bgr-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  tables: any; // TODO actually data type should be Table[]

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://bgr.gorlifsense.com/api/v1/tables')
      .subscribe(data => {
        this.tables = data;
      });
  }

  getColor() {
    return 'red';
  }
}
