import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import {ClarityModule} from "@clr/angular";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [SideNavComponent],
  exports: [
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ClarityModule,
    BrowserAnimationsModule,
  ]
})
export class AppLayoutModule { }
