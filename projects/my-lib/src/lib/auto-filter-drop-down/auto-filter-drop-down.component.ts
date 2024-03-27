import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BoldSearchTextDirective } from '../directives/bold-search-text.directive';
import { ClickOutsideDirective } from '../directives/click-outside.directive';
import { FilteredListPipe } from '../pipes/filtered-list.pipe';

@Component({
  selector: 'lib-auto-filter-drop-down',
  standalone: true,
  imports: [
    FormsModule, FilteredListPipe, BoldSearchTextDirective, ClickOutsideDirective
  ],
  templateUrl: './auto-filter-drop-down.component.html',
  styleUrl: './auto-filter-drop-down.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AutoFilterDropDownComponent,
      multi: true
    }
  ]
})
export class AutoFilterDropDownComponent implements ControlValueAccessor {
  protected searchValue?: string;
  protected openned = false;

  set value(value: string) {
    this.searchValue = value;
    this.openned = false;
    this.onChange(value);
    this.onTouched();
  }

  @Input()
  options: string[] = [];
  @Input()
  placeholder: string = 'Search ...';

  onOptionClick(option: string) {
    this.value = option;
  }

  private onChange = (value: string) => {};
  private onTouched = () => {};

  writeValue(obj?: string): void {
    if (obj)
      this.searchValue = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
