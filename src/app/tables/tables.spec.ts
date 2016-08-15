import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  beforeEachProviders,
  describe,
  inject,
  it
} from '@angular/core/testing';

// Load the implementations that should be tested
import { TablesComponent } from './tables.component';

describe('TablesComponent', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    // provide a better mock
    {
      provide: ActivatedRoute,
      useValue: {
        data: {
          subscribe: (fn) => fn({yourData: 'yolo'})
        }
      }
    },
    TablesComponent
  ]);

  it('should log ngOnInit', inject([ TablesComponent ], (tablesComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    tablesComponent.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
