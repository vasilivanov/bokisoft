import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTextComponent } from './simple-text/simple-text.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SimpleTextComponent],
  exports: [SimpleTextComponent]
})
export class SharedLibModule { }
