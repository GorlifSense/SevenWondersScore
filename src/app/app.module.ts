import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, ROUTER_DIRECTIVES } from '@angular/router'

import { AppComponent } from './app.component'
import { PLATFORM_PROVIDERS } from "../platform/browser";
import { ENV_PROVIDERS } from "../platform/environment";
import { APP_PROVIDERS } from "./index";
import { XLarge } from "./home/x-large/x-large.directive";
import { HomeComponent } from "./home/home.component";
import { NoContentComponent } from "./no-content/no-content.component";
import { AddTableComponent } from "./add-table/add-table.component";
import {TablesComponent} from "./tables/tables.component";

@NgModule({
  declarations: [AppComponent, XLarge, HomeComponent, NoContentComponent, AddTableComponent, TablesComponent],
  imports: [BrowserModule, RouterModule],
  bootstrap: [AppComponent],
  providers: [...PLATFORM_PROVIDERS, ...ENV_PROVIDERS, ...APP_PROVIDERS]
})

export class AppModule {}
