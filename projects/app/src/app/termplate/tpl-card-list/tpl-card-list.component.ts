import { NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-tpl-card-list',
  standalone: true,
  imports: [MatCard, NgTemplateOutlet],
  templateUrl: './tpl-card-list.component.html',
  styleUrl: './tpl-card-list.component.css'
})
export class TplCardListComponent<T> {

  @Input({
    required: true
  })
  list!: Array<T>;

  @ContentChild('rowRef', {read: TemplateRef})
  rowTemplate!: TemplateRef<{ $implicit: T}>;

}
