import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import {ClarityModule} from "@clr/angular";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SideNavComponent, MainLayoutComponent],
  exports: [
    SideNavComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ClarityModule,
    RouterModule,
    BrowserAnimationsModule,
  ]
})
export class AppLayoutModule { }
