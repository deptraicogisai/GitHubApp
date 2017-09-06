import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {routing} from "./app-routing";
import {RouterModule} from "@angular/router";
import {HeroModule} from "./component/hero/hero.module";
import {UiTableComponent} from './helper/ui-table/ui-table.component';
import {SharedComponent} from './component/shared/shared.component';
import {SharedModule} from "./component/shared/shared.module";
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    HeroModule,
    SharedModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
