import { Component, Input, OnInit } from '@angular/core';
import { Player, Table } from '../table.model';

@Component({
  selector: 'bgr-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.css']
})
export class TableItemComponent implements OnInit {
  @Input() table: Table;

  constructor() { }

  ngOnInit() {
  }

  sumAllPlayerPoints(player: Player) {
    // TODO make this with map/reduce or any other safe method
    let sum = 0;
    /* tslint:disable */
    for (const key in player.situation) {
      sum += parseInt(player.situation[key], 10)
    }
    /* tslint:enable */
    return sum;
  }

}
