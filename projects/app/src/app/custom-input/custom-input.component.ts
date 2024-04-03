import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {
  public inputExemple: FormControl = new FormControl();//à typer

  constructor() { }

  onChange: any = () => { };
  onTouch: any = () => { };

  writeValue(value: any): void {
    if (value !== undefined) {
      this.inputExemple.setValue(value.inputExemple || '');
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.inputExemple.disable();
    } else {
      this.inputExemple.enable();
    }
  }

  resetInput(): void {
    this.inputExemple.reset('');
    this.onChange({ inputExemple: this.inputExemple.value });
    this.onTouch();
  }

  onInputChange(): void {
    this.onChange({ inputExemple: this.inputExemple.value });
    this.onTouch();
  }
}
