import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TablesComponent } from './tables/tables.component';
import { TableDetailComponent } from './tables/table-detail/table-detail.component';
import { TableItemComponent } from './tables/table-item/table-item.component';

const appRoutes: Routes = [
  { path: 'table', component: TableDetailComponent },
  { path: 'tables', component: TablesComponent },
  { path: '',   redirectTo: '/tables', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TablesComponent,
    TableDetailComponent,
    TableItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
