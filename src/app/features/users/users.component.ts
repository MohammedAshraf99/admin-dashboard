import { Component, inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UsersService } from '../../services/users.service';

export interface PeriodicElement {
  email: string;
  id: string;
  password: string;
  username: string;
  phone: number;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatTableModule, MatPaginator],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  UsersService = inject(UsersService);
  ngOnInit() {
    this.UsersService.getUsers().subscribe(console.log);
  }

  displayedColumns: string[] = ['id', 'username', 'email', 'password', 'phone'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    email: 'test@TestBed.com',
    id: '1',
    password: '12345',
    username: 'Hishan',
    phone: 11111111,
  },
  {
    email: 'test@TestBed.com',
    id: '1',
    password: '12345',
    username: 'mohamed',
    phone: 11111111,
  },
  {
    email: 'test@TestBed.com',
    id: '1',
    password: '12345',
    username: 'Liisdf',
    phone: 11111111,
  },
  {
    email: 'test@TestBed.com',
    id: '1',
    password: '12345',
    username: 'Besoy',
    phone: 11111111,
  },
  {
    email: 'test@TestBed.com',
    id: '1',
    password: '12345',
    username: 'Boransh',
    phone: 11111111,
  },
  {
    email: 'test@TestBed.com',
    id: '1',
    password: '12345',
    username: 'sayid',
    phone: 11111111,
  },
  {
    email: 'test@TestBed.com',
    id: '1',
    password: '12345',
    username: 'ibra',
    phone: 11111111,
  },
  {
    email: 'test@TestBed.com',
    id: '1',
    password: '12345',
    username: 'wed',
    phone: 11111111,
  },
  {
    email: 'test@TestBed.com',
    id: '1',
    password: '12345',
    username: 'Fahad',
    phone: 11111111,
  },
  {
    email: 'test@TestBed.com',
    id: '1',
    password: '12345',
    username: 'Nehal',
    phone: 11111111,
  },
  {
    email: 'test@TestBed.com',
    id: '1',
    password: '12345',
    username: 'Nader',
    phone: 11111111,
  },
  {
    email: 'test@TestBed.com',
    id: '1',
    password: '12345',
    username: 'Maged',
    phone: 11111111,
  },
  {
    email: 'test@TestBed.com',
    id: '1',
    password: '12345',
    username: 'Ali',
    phone: 11111111,
  },
  {
    email: 'test@TestBed.com',
    id: '1',
    password: '12345',
    username: 'Sami',
    phone: 11111111,
  },
  {
    email: 'test@TestBed.com',
    id: '1',
    password: '12345',
    username: ' Omar',
    phone: 11111111,
  },
  {
    email: 'test@TestBed.com',
    id: '1',
    password: '12345',
    username: 'Samir',
    phone: 11111111,
  },
  {
    email: 'test@TestBed.com',
    id: '1',
    password: '12345',
    username: 'Tamer',
    phone: 11111111,
  },
  {
    email: 'test@TestBed.com',
    id: '1',
    password: '12345',
    username: 'Akram',
    phone: 11111111,
  },
  {
    email: 'test@TestBed.com',
    id: '1',
    password: '12345',
    username: 'adel',
    phone: 11111111,
  },
  {
    email: 'test@TestBed.com',
    id: '1',
    password: '12345',
    username: 'Yasser',
    phone: 11111111,
  },
];
