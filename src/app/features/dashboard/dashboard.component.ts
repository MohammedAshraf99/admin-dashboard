import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { ReportsComponent } from '../../shared/reports/reports.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { ChartConfiguration } from 'chart.js';
import { OrderComponent } from '../order/order.component';
import { LoaderComponent } from '../../loader/loader.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    CardComponent,
    ReportsComponent,
    HeaderComponent,
    OrderComponent,
    LoaderComponent,
    RouterLink,
    LoaderComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

  img = './assets/img/data-analytics_11389924.png';

  salesData: ChartConfiguration['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales 2023',
        data: [20, 1200, 1300, 1800, 2000],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  chartData: ChartConfiguration['data'] = {
    labels: ['Jan', 'Jan', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'jun', 'july'],
    datasets: [
      {
        label: 'Sales',
        data: [520, 450, 330, 220, 1100, 81, 56, 11, 33],
        fill: true,
        backgroundColor: '#0561FC', // Sky blue color
        borderRadius: 10, // This works in Chart.js 3.0+
      },
    ],
  };
}
