import { Component, OnInit } from '@angular/core';
import {Customer, NotificationType} from "./customer.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {pairwise} from "rxjs/operators";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customerForm: FormGroup;
  customer: Customer = new Customer();
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: "",
      email: [""],
      phone: [""],
      notification: NotificationType.none,
      sendCatalog: true
    });

    console.log(Object.keys(this.customerForm.controls));

    this.getControl('notification').valueChanges.pipe(
      pairwise<NotificationType>()
    ).subscribe(([prev, value]) => {
      if (prev === value) {
        return;
      }
      console.log('notification field changed to ' + value);
      if (NotificationType.text === value) {
        this.getControl('phone').setValidators([Validators.required]);
        this.getControl('email').clearValidators();
      } else if (NotificationType.email === value) {
        this.getControl('email').setValidators([Validators.required, Validators.email])
        this.getControl('phone').clearValidators();
      } else {
        this.getControl('email').clearValidators();
        this.getControl('phone').clearValidators();
      }
      this.getControl('email').updateValueAndValidity();
      this.getControl('phone').updateValueAndValidity();
    });
  }

  load() {
    this.customerForm.patchValue({
      firstName: "Kiro",
      lastName: "Spasov",
      email: "kiro@gmail.com",
      sendCatalog: false
    });
  }

  save() {
    console.log(this.customerForm);
  }

  private getControl(name: ControlName) {
    // this.customerForm.contains()
    return this.customerForm.get(name);
  }

}

type ControlName = keyof Customer;
