import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-custom-clr-controls',
  templateUrl: './custom-clr-controls.component.html',
  styleUrls: ['./custom-clr-controls.component.scss']
})
export class CustomClrControlsComponent implements OnInit {

  reactiveModel: FormGroup;

  units = [
    {id: "mb", name: "MB"},
    {id: "gb", name: "GB"},
    {id: "tb", name: "TB"},
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveModel = this.formBuilder.group({
      container: ["", [Validators.required]],
      custom: [null],
    });
  }


  save() {
    console.log(this.reactiveModel);
  }

}
