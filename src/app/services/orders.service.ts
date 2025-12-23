import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  BASE_URl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getOrders() {
   return this.http.get(this.BASE_URl)
  }
}
