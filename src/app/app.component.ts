/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.style.css'],
  templateUrl: 'app.component.html'
})

export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Seven Wonders Score';
  url = 'https://twitter.com/GorlifSense';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
