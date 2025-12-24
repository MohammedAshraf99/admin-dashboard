import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
})
export class ReportsComponent {
  @Input() chartData!: ChartConfiguration['data'];
  @Input() chartType: ChartType = 'bar';

  @Input() chartOptions: ChartConfiguration['options'] = {
    responsive: false,

    maintainAspectRatio: false, // Crucial for full-width
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },

      tooltip: {
        enabled: true,
      },
    },
  };
}
