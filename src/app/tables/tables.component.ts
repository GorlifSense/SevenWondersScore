import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bgr-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  name = 'Player';
  situation = {
    total: 5
  };
  tables = [
    {
      name: 'Morning',
      situation: {
        total: 34
      }
    },
    {
      name: 'Not First',
      situation: {
        total: 52
      }
    }
  ];


  constructor() {

  }

  ngOnInit() {
  }

}
