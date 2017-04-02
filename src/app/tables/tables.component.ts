import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bgr-tables',
  templateUrl: './tables.component.html'
})
export class TablesComponent implements OnInit {
  name = 'Player';
  situation = {
    total: 5
  };
  tables = [{
    name: 'Morning',
    situation: {
      total: 34
    }
  }];


  constructor() {

  }

  ngOnInit() {
  }

}
