import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaInputComponent } from './fa-input/fa-input.component';
import { ClarityModule } from '@clr/angular';
import { FaInputTwoComponent } from './fa-input-two/fa-input-two.component';
import { InputRefDirective } from './fa-input-two/input-ref.directive';


@NgModule({
  declarations: [FaInputComponent, FaInputTwoComponent, InputRefDirective],
  exports: [
    FaInputComponent,
    FaInputTwoComponent,
    InputRefDirective,
  ],
  imports: [
    CommonModule,
    ClarityModule,
  ]
})
export class ProjectionModule { }
