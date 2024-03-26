import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Address, AddressInputComponent as LibAddressInputComponent } from 'my-lib';

@Component({
  selector: 'app-address-input',
  standalone: true,
  imports: [ReactiveFormsModule, LibAddressInputComponent],
  templateUrl: './address-input.component.html',
  styleUrl: './address-input.component.css'
})
export class AddressInputComponent {
  protected formGroup = new FormGroup({
    address: new FormControl<Address | null>(null)
  });

  submit(): void {
    console.log(this.formGroup.valid);
    console.log(this.formGroup.value);
  }
}
