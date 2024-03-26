import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  styleUrl: './auto-filter-drop-down.component.css'
})
export class AutoFilterDropDownComponent {
  protected searchValue?: string;
  protected openned = false;

  set value(value: string) {
    this.searchValue = value;
    this.openned = false;
  }

  @Input()
  options: string[] = [];
  @Input()
  placeholder: string = 'Search ...';

  onOptionClick(option: string) {
    this.value = option;
  }
}
