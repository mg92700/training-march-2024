import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LoggerLevel, provideLogger } from 'my-lib';
import { provideClientHydration } from '@angular/platform-browser';
import { provideServiceWorker } from '@angular/service-worker';


export const appConfig: ApplicationConfig = {
    providers: [
    provideAnimations(),
    provideHttpClient(withFetch()),
    provideRouter(routes, withComponentInputBinding()),
    provideLogger(LoggerLevel.INFO),
    provideClientHydration(),
    provideServiceWorker('ngsw-worker.js', {
        enabled: true,
        registrationStrategy: 'registerWhenStable:30000'
    })
]
};
