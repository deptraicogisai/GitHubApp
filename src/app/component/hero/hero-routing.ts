import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HeroComponent} from "./hero.component";
import {HeroListComponent} from "./hero-list/hero-list.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {DeactivateGuardService} from "../../service/deactivate-guard.service";

/**
 * Created by Clearpath on 6/28/2017.
 */

export const routes: Routes = [
  {
    path: 'hero', component: HeroComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: HeroListComponent, canDeactivate: [DeactivateGuardService]},
      {path: 'detail', component: HeroDetailComponent},
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

