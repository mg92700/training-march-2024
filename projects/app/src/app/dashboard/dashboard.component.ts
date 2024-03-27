import { Component, inject } from '@angular/core';
import { LoggerService } from 'my-lib';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    standalone: true
})
export class DashboardComponent {

  constructor() {
    inject(LoggerService).warn('Dashboard component created');
    inject(LoggerService).debug('Dashboard component created');
    inject(LoggerService).info('Dashboard component created');
    inject(LoggerService).error('Dashboard component created');
  }
}
