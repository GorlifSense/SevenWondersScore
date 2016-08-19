import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { TablesComponent } from './tables';
import { AddTableComponent } from './add-table';
import { NoContentComponent } from './no-content';

export const appRoutes: RouterConfig = [
  { path: '',        component: HomeComponent },
  { path: 'home',    component: HomeComponent },
  { path: 'tables',  component: TablesComponent },
  { path: 'add-table',  component: AddTableComponent },
  { path: '**',      component: NoContentComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes: AsyncRoutes = {
  // we have to use the alternative syntax for es6-promise-loader to grab the routes
  'tables': require('es6-promise-loader!./tables'),
  'add-table': require('es6-promise-loader!./add-table')
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
  asyncRoutes['tables'],
  asyncRoutes['add-table'],
  // es6-promise-loader returns a function
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
