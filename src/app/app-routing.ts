import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
/**
 * Created by Clearpath on 6/28/2017.
 */

export const routes: Routes = [
  { path: '', redirectTo: 'hero', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

