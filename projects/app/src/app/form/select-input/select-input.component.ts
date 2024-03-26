import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AutoFilterDropDownComponent } from 'my-lib';

@Component({
  selector: 'app-select-input',
  standalone: true,
  imports: [ReactiveFormsModule, AutoFilterDropDownComponent],
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.css'
})
export class SelectInputComponent {
  protected categories = [
    'angular',
    'react',
    'vuejs',
    'svelte',
    'elm',
    'other'
  ];

  public formGroup = new FormGroup({
    category: new FormControl()
  });

  submit(): void {
    console.log(this.formGroup.value);
  }
}
