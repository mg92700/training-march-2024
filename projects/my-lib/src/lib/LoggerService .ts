// logger.service.ts

import { Injectable, InjectionToken } from '@angular/core';

export enum LoggerLevel {
  DEBUG,
  INFO,
  WARN,
  ERROR
}

export interface ILoggerService {
  setLogLevel(level: LoggerLevel): void;
  log(lvl: LoggerLevel, msg: string): void;
}

export const LOGGER_SERVICE_TOKEN = new InjectionToken<ILoggerService>('LOGGER_SERVICE_TOKEN');

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements ILoggerService {
  private loggerLevel: LoggerLevel = LoggerLevel.INFO; // Niveau de log par défaut

  setLogLevel(level: LoggerLevel): void {
    this.loggerLevel = level;
  }

  log(lvl: LoggerLevel, msg: string): void {
    if (lvl < this.loggerLevel) return;

    switch (lvl) {
      case LoggerLevel.INFO:
        console.info('%c' + msg, 'color: #6495ED');
        break;
      case LoggerLevel.WARN:
        console.warn('%c' + msg, 'color: #FF8C00');
        break;
      case LoggerLevel.ERROR:
        console.error('%c' + msg, 'color: #DC143C');
        break;
      default:
        console.debug(msg);
        break;
    }
  }
}
