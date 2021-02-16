import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppLayoutModule} from "./app-layout/app-layout.module";
import {ReusableFormsModule} from "./reusable-forms/reusable-forms.module";
import { ClarityTestModule } from "./clarity-test/clarity-test.module";
import { ProjectionModule } from './projection/projection.module';
import { TestjsComponent } from './testjs/testjs.component';

@NgModule({
  declarations: [
    AppComponent,
    TestjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    AppLayoutModule,
    ReusableFormsModule,
    ClarityTestModule,
    ProjectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
