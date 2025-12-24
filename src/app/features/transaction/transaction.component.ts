import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
export interface Transaction {
  id: string;
  customerName: string;
  date: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Failed';
  paymentMethod: string;
}

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [MatTableModule, MatPaginator,DatePipe,CurrencyPipe],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})

export class TransactionComponent {
displayedColumns: string[] = ['customerName','date',  
   'amount','paymentMethod', 'status'];
 dataSource = new MatTableDataSource<Transaction>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
const ELEMENT_DATA: Transaction[] = [
  { id: 'TX1001', customerName: 'Hishan', date: '2023-10-01', amount: 150.50, status: 'Completed', paymentMethod: 'Visa' },
  { id: 'TX1002', customerName: 'Mohamed', date: '2023-10-02', amount: 2400.00, status: 'Pending', paymentMethod: 'PayPal' },
  { id: 'TX1003', customerName: 'Liisdf', date: '2023-10-02', amount: 45.99, status: 'Completed', paymentMethod: 'MasterCard' },
  { id: 'TX1004', customerName: 'Besoy', date: '2023-10-03', amount: 890.00, status: 'Failed', paymentMethod: 'Bank Transfer' },
  { id: 'TX1005', customerName: 'Boransh', date: '2023-10-04', amount: 120.00, status: 'Completed', paymentMethod: 'Visa' },
  { id: 'TX1006', customerName: 'Sayid', date: '2023-10-05', amount: 330.50, status: 'Completed', paymentMethod: 'Apple Pay' },
  { id: 'TX1007', customerName: 'Ibra', date: '2023-10-05', amount: 12.00, status: 'Pending', paymentMethod: 'Visa' },
  { id: 'TX1008', customerName: 'Wed', date: '2023-10-06', amount: 550.00, status: 'Completed', paymentMethod: 'MasterCard' },
  { id: 'TX1009', customerName: 'Fahad', date: '2023-10-07', amount: 1200.00, status: 'Failed', paymentMethod: 'Bank Transfer' },
  { id: 'TX1010', customerName: 'Nehal', date: '2023-10-08', amount: 75.25, status: 'Completed', paymentMethod: 'PayPal' },
  { id: 'TX1011', customerName: 'Nader', date: '2023-10-09', amount: 210.00, status: 'Pending', paymentMethod: 'Visa' },
  { id: 'TX1012', customerName: 'Maged', date: '2023-10-10', amount: 95.00, status: 'Completed', paymentMethod: 'Cash' },
  { id: 'TX1013', customerName: 'Ali', date: '2023-10-10', amount: 410.00, status: 'Completed', paymentMethod: 'MasterCard' },
  { id: 'TX1014', customerName: 'Sami', date: '2023-10-11', amount: 60.00, status: 'Failed', paymentMethod: 'Visa' },
  { id: 'TX1015', customerName: 'Omar', date: '2023-10-12', amount: 1300.00, status: 'Completed', paymentMethod: 'Bank Transfer' },
  { id: 'TX1016', customerName: 'Samir', date: '2023-10-13', amount: 25.00, status: 'Pending', paymentMethod: 'Apple Pay' },
  { id: 'TX1017', customerName: 'Tamer', date: '2023-10-14', amount: 480.00, status: 'Completed', paymentMethod: 'Visa' },
  { id: 'TX1018', customerName: 'Akram', date: '2023-10-15', amount: 90.50, status: 'Completed', paymentMethod: 'PayPal' },
  { id: 'TX1019', customerName: 'Adel', date: '2023-10-16', amount: 110.00, status: 'Failed', paymentMethod: 'MasterCard' },
  { id: 'TX1020', customerName: 'Yasser', date: '2023-10-17', amount: 720.00, status: 'Completed', paymentMethod: 'Visa' },
];