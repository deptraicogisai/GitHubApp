import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroListComponent} from './hero-list/hero-list.component';
import {routing} from "./hero-routing";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {HeroService} from "../../service/hero.service";
import {RouterModule} from "@angular/router";
import {HeroComponent} from "./hero.component";
import {UiTableComponent} from "../../helper/ui-table/ui-table.component";
import {UiPagingComponent} from "../../helper/ui-paging/ui-paging.component";
import {DeactivateGuardService} from "../../service/deactivate-guard.service";
import {ConfirmDialogComponent} from "../../confirm-dialog/confirm-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    routing

  ],
  declarations: [HeroComponent, HeroDetailComponent, HeroListComponent,
    UiTableComponent, UiPagingComponent, ConfirmDialogComponent],
  providers: [HeroService, DeactivateGuardService]
})
export class HeroModule {
}
