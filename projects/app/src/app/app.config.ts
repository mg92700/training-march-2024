import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LoggerLevel, provideLogger } from 'my-lib';
import { provideClientHydration } from '@angular/platform-browser';


export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideHttpClient(),
        provideRouter(routes, withComponentInputBinding()),
        provideLogger(LoggerLevel.INFO),
        provideClientHydration()
    ]
};
