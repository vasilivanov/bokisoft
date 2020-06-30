import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBTextComponent } from './custom-b-text/custom-b-text.component';
import {SharedLibModule} from "../shared-lib/shared-lib.module";
import {SIMPLE_TEXT_SERVICE_TOKEN} from "../shared-lib/interfaces/simple-test.interface";
import {CustomBSimpleTextService} from "./custom-b-simple-text.service";

@NgModule({
  imports: [
    CommonModule,
    SharedLibModule
  ],
  declarations: [CustomBTextComponent],
  exports: [
    CustomBTextComponent
  ]
})
export class CustomBModule { }
