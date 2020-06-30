import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableFormsExampleComponent } from './reusable-forms-example/reusable-forms-example.component';
import {ProfileFormComponent} from "./profile-form/profile-form.component";
import {PasswordFormComponent} from "./passwod-form/password-form.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReusableFormsExampleComponent
  ],
  declarations: [ProfileFormComponent, PasswordFormComponent, ReusableFormsExampleComponent]
})
export class ReusableFormsLibModule { }
