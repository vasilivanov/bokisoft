import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ClrFormsModule, ClrIconModule} from "@clr/angular";
import { CustomClrControlsComponent } from './custom-clr-controls/custom-clr-controls.component';
import { CustomControlComponent } from './custom-clr-controls/custom-control/custom-control.component';



@NgModule({
  declarations: [CustomerComponent, CustomClrControlsComponent, CustomControlComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrFormsModule,
    ClrIconModule
  ],
  exports: [CustomerComponent, CustomClrControlsComponent]
})
export class ReusableFormsModule { }
