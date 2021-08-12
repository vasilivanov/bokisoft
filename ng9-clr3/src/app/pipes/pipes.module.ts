import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegabytesPipe } from './megabytes.pipe';



@NgModule({
   declarations: [MegabytesPipe],
   exports: [
      MegabytesPipe
   ],
   imports: [
      CommonModule
   ]
})
export class PipesModule { }
