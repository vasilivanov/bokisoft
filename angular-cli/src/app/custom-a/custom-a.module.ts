import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomATextComponent } from './custom-a-text/custom-a-text.component';
import {SharedLibModule} from "../shared-lib/shared-lib.module";
import {SIMPLE_TEXT_SERVICE_TOKEN, SimpleTextService} from "../shared-lib/interfaces/simple-test.interface";
import {CustomASimpleTextService} from "./custom-a-simple-text.service";

@NgModule({
  imports: [
    CommonModule,
    SharedLibModule
  ],
  declarations: [CustomATextComponent],
  exports: [
    CustomATextComponent
  ]
})
export class CustomAModule { }
