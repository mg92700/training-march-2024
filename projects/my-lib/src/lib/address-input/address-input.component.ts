import { Component } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule, ValidationErrors, Validator, Validators } from '@angular/forms';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';

export interface Address {
  number?: string;
  street?: string;
  postalCode: string;
  city: string;
  country: string;
};

@Component({
  selector: 'lib-address-input',
  standalone: true,
  templateUrl: './address-input.component.html',
  styles: ['form {display: flex; flex-direction: column;}'],
  imports: [ReactiveFormsModule, MatInput, MatFormField, MatLabel],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AddressInputComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: AddressInputComponent,
      multi: true
    }
  ]
})
export class AddressInputComponent implements ControlValueAccessor, Validator {

  protected adressForm = new FormGroup({
    number: new FormControl<string | undefined>(undefined, {nonNullable: true}),
    street: new FormControl<string | undefined>(undefined, {nonNullable: true}),
    postalCode: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
    city: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
    country: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]})
  });

  private onTouched?: () => void;
  private onChanged?: (val?: Address) => void;

  constructor() {
    this.adressForm.valueChanges.subscribe(val => {
      if (this.onChanged)
        this.onChanged(this.adressForm.getRawValue());
      if (this.onTouched)
        this.onTouched();
    });
  }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (this.adressForm.valid) return null;
    return {
      'address': 'error'
    }
  }

  writeValue(obj?: Address): void {
    if (!obj) return;
    this.adressForm.patchValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
