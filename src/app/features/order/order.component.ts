import {
  AfterViewInit,
  Component,
  inject,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { OrdersService } from '../../services/orders.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  status: object;
}
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [MatTableModule, MatPaginator],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent implements OnInit, AfterViewInit {
  OrdersService = inject(OrdersService);
  ngOnInit() {
    this.OrdersService.getOrders()
      .subscribe();
  }

  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'status',
  ];
  
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    status: { statusName: 'Approved', code: 0 },
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    status: { statusName: 'Approved', code: 0 },
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    status: { statusName: 'Approved', code: 0 },
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    status: { statusName: 'Approved', code: 0 },
  },
  {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    status: { statusName: 'Approved', code: 0 },
  },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    status: { statusName: 'In Progress', code: 1 },
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    status: { statusName: 'In Progress', code: 1 },
  },
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    status: { statusName: 'In Progress', code: 1 },
  },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    status: { statusName: 'In Progress', code: 1 },
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    status: { statusName: 'Pending', code: 2 },
  },
  {
    position: 11,
    name: 'Sodium',
    weight: 22.9897,
    symbol: 'Na',
    status: { statusName: 'Pending', code: 2 },
  },
  {
    position: 12,
    name: 'Magnesium',
    weight: 24.305,
    symbol: 'Mg',
    status: { statusName: 'Pending', code: 2 },
  },
  {
    position: 13,
    name: 'Aluminum',
    weight: 26.9815,
    symbol: 'Al',
    status: { statusName: 'Pending', code: 2 },
  },
  {
    position: 14,
    name: 'Silicon',
    weight: 28.0855,
    symbol: 'Si',
    status: { statusName: 'Pending', code: 2 },
  },
  {
    position: 15,
    name: 'Phosphorus',
    weight: 30.9738,
    symbol: 'P',
    status: { statusName: 'Pending', code: 2 },
  },
  {
    position: 16,
    name: 'Sulfur',
    weight: 32.065,
    symbol: 'S',
    status: { statusName: 'Pending', code: 2 },
  },
  {
    position: 17,
    name: 'Chlorine',
    weight: 35.453,
    symbol: 'Cl',
    status: { statusName: 'Pending', code: 2 },
  },
  {
    position: 18,
    name: 'Argon',
    weight: 39.948,
    symbol: 'Ar',
    status: { statusName: 'Pending', code: 2 },
  },
  {
    position: 19,
    name: 'Potassium',
    weight: 39.0983,
    symbol: 'K',
    status: { statusName: 'Pending', code: 2 },
  },
  {
    position: 20,
    name: 'Calcium',
    weight: 40.078,
    symbol: 'Ca',
    status: { statusName: 'Pending', code: 2 },
  },
];
