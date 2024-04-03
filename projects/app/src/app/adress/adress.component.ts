import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomInputComponent } from '../custom-input/custom-input.component';

@Component({
  selector: 'app-adress',
  standalone: true,
  templateUrl: './adress.component.html',
  styleUrl: './adress.component.css',
  imports: [ReactiveFormsModule,CustomInputComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AdressComponent),
      multi: true
    }
  ]
})
export class AdressComponent  implements OnInit,ControlValueAccessor {
  myForm!: FormGroup;
  public number: FormControl = new FormControl(null, Validators.required);
  public street: FormControl = new FormControl(null, Validators.required);
  public postalCode: FormControl = new FormControl('', [Validators.required, Validators.pattern(/^\d{5}$/)]);
  public city: FormControl = new FormControl('', Validators.required);
  public country: FormControl = new FormControl('', Validators.required);
  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      address: this.formBuilder.group({
        number: [null, Validators.required],
        street: [null, Validators.required],
        postalCode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
        city: ['', Validators.required],
        country: ['', Validators.required]
      })
    });
  }

  onSubmit() {
    if (this.myForm && this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }


  writeValue(obj: any): void {
    if (obj) {
      this.myForm.patchValue({
        address: {
          number: obj.number || null,
          street: obj.street || null,
          postalCode: obj.postalCode || '',
          city: obj.city || '',
          country: obj.country || ''
        }
      });
    }
  }

  registerOnChange(fn: any): void {
    this.myForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.myForm.markAllAsTouched();
    this.myForm.valueChanges.subscribe(() => fn());
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.myForm.disable();
    } else {
      this.myForm.enable();
    }
  }
}
