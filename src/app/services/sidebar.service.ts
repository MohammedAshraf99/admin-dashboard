import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private $sidebar = new BehaviorSubject<boolean>(false);
  sidebar = this.$sidebar.asObservable();

  constructor() {}

  open() {
    this.$sidebar.next(true);
  }
  close() {
    this.$sidebar.next(false);
  }
}
