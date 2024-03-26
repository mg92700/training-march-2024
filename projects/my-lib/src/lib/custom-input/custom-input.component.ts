import { Component } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-custom-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomInputComponent,
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {
  private _val?: string;

  protected get val() {
    return this._val??'';
  }

  protected set val(val: string | undefined) {
    this._val = val;
    if (this.onChanged)
      this.onChanged(val);
    if (this.onTouched)
      this.onTouched();
  }

  private onTouched?: () => void;
  private onChanged?: (val?: string) => void;

  protected reset(): void {
    this.val = undefined;
  }

  writeValue(obj?: string | null): void {
    if (!obj) return;
    this.val = obj;
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
