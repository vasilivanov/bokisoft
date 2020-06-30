import {AbstractControl, ValidatorFn} from "@angular/forms";

export function matchingInputsValidator(password: string, confirm: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {

    console.log("validation password: " + JSON.stringify(control.value));
    const forbidden = control.value[password] !== control.value[confirm];
    return forbidden ? {'missmatch': {value: control.value}} : null;
  };
}
