import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackViewTestComponent } from './stack-view-test/stack-view-test.component';
import { ClarityModule, ClrFormsModule } from "@clr/angular";
import { ReusableFormsModule } from "../reusable-forms/reusable-forms.module";
import { CustomAccordionPanelComponent } from './custom-accordion-panel/custom-accordion-panel.component';
import { ClarityTestComponent } from './clarity-test/clarity-test.component';
import { PipesModule } from '../pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
   declarations: [StackViewTestComponent, CustomAccordionPanelComponent, ClarityTestComponent],
   exports: [
      ClarityTestComponent,
   ],
   imports: [
      CommonModule,
      ClarityModule,
     ReactiveFormsModule,
     ClrFormsModule,
      ReusableFormsModule,
      PipesModule
   ]
})
export class ClarityTestModule { }
