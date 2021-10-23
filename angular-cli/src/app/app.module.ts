import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoCardComponent } from "./info-card/info-card.component";
import { HttpClientModule } from "@angular/common/http";
import {CustomAModule} from "./custom-a/custom-a.module";
import {CustomBModule} from "./custom-b/custom-b.module";
import {ReusableFormsLibModule} from "./reusable-forms-lib/reusable-forms-lib.module";
import { TypescriptTestModule } from './typescript-test/typescript-test.module';

@NgModule({
  declarations: [
    AppComponent,
    InfoCardComponent,
  ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
     TypescriptTestModule,
     CustomBModule,
     CustomAModule,
     ReusableFormsLibModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
