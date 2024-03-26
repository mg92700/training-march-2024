import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomInputComponent } from './form/custom-input/custom-input.component';
import { SelectInputComponent } from './form/select-input/select-input.component';
import { AddressInputComponent } from './form/address-input/address-input.component';

export const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'posts', loadChildren: () => import('./posts/posts-routes')
  },
  {
    path: 'forms', children: [
      {
        path: '', component: CustomInputComponent
      },
      {
        path: 'select',
        component: SelectInputComponent
      },
      {
        path: 'address',
        component: AddressInputComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
