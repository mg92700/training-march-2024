import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent as LibCustomInputComponent } from 'my-lib';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [ReactiveFormsModule, LibCustomInputComponent],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css'
})
export class CustomInputComponent {
  protected formGroup = new FormGroup({
    formControl: new FormControl<string | null>(null)
  });

  submit(): void {
    console.log(this.formGroup.value);
  }
}
