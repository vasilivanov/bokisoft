import { Component } from '@angular/core';
import {FormGroup, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-reusable-forms-example',
  templateUrl: './reusable-forms-example.component.html',
  styleUrls: ['./reusable-forms-example.component.css']
})
export class ReusableFormsExampleComponent {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      password: [],
      profile: []
    });
  }

  submit() {
    if (!this.signupForm.valid) {
      console.log(this.signupForm.errors);
    } else {
      console.log(this.signupForm.value);
    }
  }
}
