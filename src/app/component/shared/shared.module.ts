import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedComponent} from "./shared.component";
import {TestService} from "../../service/test.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedComponent],
  providers: [TestService]
})
export class SharedModule {
}
