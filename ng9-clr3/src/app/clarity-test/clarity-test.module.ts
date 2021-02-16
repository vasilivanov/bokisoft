import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackViewTestComponent } from './stack-view-test/stack-view-test.component';
import { ClarityModule } from "@clr/angular";
import { ReusableFormsModule } from "../reusable-forms/reusable-forms.module";
import { CustomAccordionPanelComponent } from './custom-accordion-panel/custom-accordion-panel.component';
import { ClarityTestComponent } from './clarity-test/clarity-test.component';



@NgModule({
   declarations: [StackViewTestComponent, CustomAccordionPanelComponent, ClarityTestComponent],
   exports: [
      ClarityTestComponent,
   ],
   imports: [
      CommonModule,
      ClarityModule,
      ReusableFormsModule
   ]
})
export class ClarityTestModule { }
