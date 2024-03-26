import { Directive, ElementRef, Input, SimpleChanges, inject } from '@angular/core';

@Directive({
  selector: '[libBoldSearchText]',
  standalone: true
})
export class BoldSearchTextDirective {
  @Input('libBoldSearchText')
  searchText?: string;

  private el = inject(ElementRef);

  ngOnChanges(change: SimpleChanges) {
    const content = this.el.nativeElement.innerText;
    if (!content || !this.searchText) return;
    const highlightedContent = content.replace(
      new RegExp(change['searchText'].currentValue, 'gi'),
      (match: string) => `<strong>${match}</strong>`
    );
    this.el.nativeElement.innerHTML = highlightedContent;
  }
}
