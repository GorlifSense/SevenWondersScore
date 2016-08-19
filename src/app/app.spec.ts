import {
  addProviders,
  inject,
  it
} from '@angular/core/testing';

// Load the implementations that should be tested
import { AppComponent } from './app.component';
import { AppState } from './app.service';

describe('AppComponent', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => addProviders([
    AppState,
    AppComponent
  ]));

  it('should have a url', inject([ AppComponent ], (appComponent) => {
    expect(appComponent.url).toEqual('https://twitter.com/GorlifSense');
  }));

});

