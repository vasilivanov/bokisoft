import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoCardComponent } from "./info-card/info-card.component";
import { HttpClientModule } from "@angular/common/http";
import { CustomTreeViewComponent } from './custom-tree-view/custom-tree-view.component';
import {CustomAModule} from "./custom-a/custom-a.module";
import {CustomBModule} from "./custom-b/custom-b.module";
import {ReusableFormsLibModule} from "./reusable-forms-lib/reusable-forms-lib.module";

@NgModule({
  declarations: [
    AppComponent,
    InfoCardComponent,
    CustomTreeViewComponent
  ],
   imports: [
      BrowserModule,
      ClarityModule,
      BrowserAnimationsModule,
      HttpClientModule,
     CustomBModule,
     CustomAModule,
     ReusableFormsLibModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
