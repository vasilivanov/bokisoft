import { Component, forwardRef, OnInit } from '@angular/core';
import {
  ControlValueAccessor, FormArray,
  FormBuilder, FormControl,
  FormGroup, NG_VALIDATORS,
  NG_VALUE_ACCESSOR, ValidationErrors, Validator,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-custom-control',
  templateUrl: './custom-control.component.html',
  styleUrls: ['./custom-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomControlComponent),
      multi: true
    },{
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomControlComponent),
      multi: true
    }
  ]
})
export class CustomControlComponent implements OnInit, ControlValueAccessor, Validator {

  form: FormGroup;

  onChange: any = () => {
  };
  onTouched: any = () => {
  };

  units = [
    {id: "mb", name: "MB"},
    {id: "gb", name: "GB"},
    {id: "tb", name: "TB"},
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      text:
        ["", [Validators.required, Validators.minLength(3)]],
      select:["mb", [Validators.required]],
      checkbox: [true]
    });

    this.form.controls['checkbox'].valueChanges.subscribe((v: any) => {
      console.log('Value changed to ' + v);
    });

    this.form.valueChanges.subscribe(v => {
      this.onChange(v);
    })
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value) {
    if (value) {
      console.log('setting new custom value');
      this.form.setValue(value);
      this.onChange(value);
      this.onTouched();
    }
  }

  setDisabledState?(isDisabled: boolean): void {

  }

  validate(f: FormControl): ValidationErrors | null {
    if (!this.form.valid) {
      console.error("validation error detected")
      return { error: true };
    }
    return null;
  }

  public getErrors(group?: FormGroup | FormArray): { [key: string]: ValidationErrors } | ValidationErrors[] | null {
    const errors = group instanceof FormArray ? [] : {};

    let idx = 0;
    Object.keys(group.controls).forEach((name) => {
      idx++;
      const control = group.get(name);
      if (control instanceof FormArray || control instanceof FormGroup) {
        const tmpErrors = this.getErrors(control as (FormArray | FormGroup));
        if (tmpErrors != null) {
          errors[name] = tmpErrors;
        }
      } else if (control instanceof FormControl) {
        if (control.errors == null) {
          return null;
        }
        if (group instanceof FormArray) {
          (errors as ValidationErrors[])[idx] = control.errors;
        } else {
          errors[name] = control.errors;
        }
      }
    });

    return (group instanceof FormGroup && Object.keys(errors).length === 0)
    || Array.isArray(errors) && errors.length === 0 ? null : errors;
  }

}
