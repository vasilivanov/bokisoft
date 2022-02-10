import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl, FormArray,
  FormBuilder, FormControl,
  FormGroup,
  ValidationErrors, ValidatorFn,
  Validators
} from '@angular/forms';
import { ClrAccordion, ClrForm } from '@clr/angular';
import { ClrAccordionPanel } from '@clr/angular/accordion/accordion-panel';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent implements OnInit {

  form: FormGroup;
  nicAdapters: NicSettings[] = [
    {
      id: 'nic1',
      ipV4Address: '',
      netMask: ''
    },
    {
      id: 'nic2',
      ipV4Address: '',
      netMask: ''
    }
  ];

  controlsToValidate: FormControl[] = [];
  invalidNicSettingCount: { [id: string]: number } = {};
  ipv6GatewayControl = new FormControl('', { validators: [this.errorValidator], updateOn: 'blur'});

  constructor(private fb: FormBuilder, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      'computerName': this.addControl('',[Validators.required, this.errorValidator]),
      'nics': this.fb.array(this.nicAdapters.map((nic) => this.fb.group({
        'id': this.addControl(nic.id),
        'ipV4Address':  this.addControl('', [Validators.required, this.errorValidator]),
        'netMask': this.addControl('', [Validators.required, this.errorValidator]),
        'gateway': this.addControl(''),
      })))
    });
  }

  private addControl(value: string | number, validators?: ValidatorFn[]): FormControl {
    const control = this.fb.control(value, { validators: validators, updateOn: 'blur'});
    if(validators?.length) {
      this.controlsToValidate.push(control);
    }
    return control;
  }

  validate() {
    console.log('Validation triggered manually.');

    this.controlsToValidate.forEach((control: FormControl) => {
      if(control.invalid) {
        // Required so that <clr-control-error> displays the generated error.
        control.markAsTouched();
        control.updateValueAndValidity();
      }
    });
    this.updateInvalidNicCount();

    console.log(JSON.stringify(this.invalidNicSettingCount));
  }

  updateInvalidNicCount() {
    this.invalidNicSettingCount = {};
    this.controlsToValidate.forEach((control: FormControl) => {
      if (!control.invalid || !control.touched) {
        return;
      }
      const nicFormGroup = control.parent.value?.id ?
        control.parent : undefined;
      if(nicFormGroup) {
        this.invalidNicSettingCount[nicFormGroup.value.id] =
          this.invalidNicSettingCount[nicFormGroup.value.id] ?
            ++this.invalidNicSettingCount[nicFormGroup.value.id] :
            1;
      }
    });
  }

  resetForm() {
    this.form.reset();
  }

  onPanelOpen(isOpen: boolean) {
    if (!isOpen) {
      this.updateInvalidNicCount();
    }
  }

  panelId(nic: NicSettings) {
    return nic.id;
  }

  gatewayList: string[] = ['gateway 11111', 'gateway222222'];
  onDelete(gateway: string) {
    console.log(gateway);
  }

  private errorValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value === 'error') {
      return { errorValidator: true };
    }
    return null;
  }
}

interface NicSettings {
  id: string;
  ipV4Address: string;
  netMask: string;
}
