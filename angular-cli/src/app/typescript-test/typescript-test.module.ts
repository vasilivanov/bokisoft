import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringTemplateComponent } from './string-template/string-template.component';



@NgModule({
  declarations: [StringTemplateComponent],
  imports: [
    CommonModule
  ],
  exports: [StringTemplateComponent]
})
export class TypescriptTestModule { }
