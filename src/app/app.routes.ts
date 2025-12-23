import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { OrderComponent } from './features/order/order.component';

export const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: 'admin',
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'orders', component: OrderComponent },
      { path: 'users', component: DashboardComponent },
      { path: 'items', component: DashboardComponent },
      { path: 'Reports', component: DashboardComponent },
      { path: 'Messages', component: DashboardComponent },
      { path: 'Support', component: DashboardComponent },
    ],
  },

  { path: '**', component: NotFoundComponent },
];
