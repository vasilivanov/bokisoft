import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackViewTestComponent } from './stack-view-test/stack-view-test.component';
import { ClarityModule } from "@clr/angular";
import { ReusableFormsModule } from "../reusable-forms/reusable-forms.module";



@NgModule({
   declarations: [StackViewTestComponent],
   exports: [
      StackViewTestComponent
   ],
   imports: [
      CommonModule,
      ClarityModule,
      ReusableFormsModule
   ]
})
export class ClarityTestModule { }
