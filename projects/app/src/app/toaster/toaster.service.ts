import { Injectable, InjectionToken, Injector, inject } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ToasterComponent } from './toaster/toaster.component';

export const DEFAULT_TIMER = 5000;

export const TOAST_DATA = new InjectionToken<Data>('TOAST_DATA');
export const TOAST_OPTIONS = new InjectionToken<Options>('TOAST_OPTIONS');

export type Data = {
  text: string;
}

export type Options = {
  timer: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  private overlay = inject(Overlay);
  private parentInjector = inject(Injector);

  open(data: Data, options: Options = {timer: DEFAULT_TIMER}): void {
    const overlayRef = this.overlay.create();
    const injector = this.getInjector(data, options, overlayRef, this.parentInjector);
    const component = new ComponentPortal(ToasterComponent, null, injector);
    overlayRef.attach(component);
  }

  private getInjector(data: Data, options: Options, overlayRef:  OverlayRef, parentInjector: Injector): Injector {
    return Injector.create({
      providers: [
        {
          provide: TOAST_DATA,
          useValue: data
        },
        {
          provide: TOAST_OPTIONS,
          useValue: options
        },
        {
          provide: OverlayRef,
          useValue: overlayRef
        }
      ],
      parent: parentInjector
    })
  }
}
