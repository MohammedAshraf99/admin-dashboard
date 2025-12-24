import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { authGuard } from './core/guard/auth.guard';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'admin',
    canActivateChild: [authGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'orders',
        loadComponent: () =>
          import('./features/order/order.component').then(
            (m) => m.OrderComponent
          ),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./features/users/users.component').then(
            (m) => m.UsersComponent
          ),
      },
      { path: 'items', component: DashboardComponent },
      { path: 'Reports', component: DashboardComponent },
      { path: 'Messages', component: DashboardComponent },
      { path: 'Support', component: DashboardComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
