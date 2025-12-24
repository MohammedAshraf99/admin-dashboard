import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  BASE_URl = 'https://fakestoreapi.com/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.BASE_URl);
  }
}
