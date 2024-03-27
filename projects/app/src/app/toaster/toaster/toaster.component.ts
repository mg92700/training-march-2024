import { Component, inject } from '@angular/core';
import { TOAST_DATA, TOAST_OPTIONS } from '../toaster.service';
import { OverlayRef } from '@angular/cdk/overlay';
import { timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.css'
})
export class ToasterComponent {
  protected text = inject(TOAST_DATA).text;
  protected options = inject(TOAST_OPTIONS);
  private overlayRef = inject(OverlayRef);

  constructor() {
    timer(this.options.timer).pipe(
      takeUntilDestroyed()
    ).subscribe(() => {
      this.overlayRef.dispose();
    });
  }
}
