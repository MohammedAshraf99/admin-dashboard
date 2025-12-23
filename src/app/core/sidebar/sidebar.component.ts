import { Component, inject, Input } from '@angular/core';
import { NavbtnComponent } from '../../shared/navbtn/navbtn.component';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe, NgClass } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Observable } from 'rxjs';

interface Sidebar {
  name: string;
  iconName: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIcon, AsyncPipe, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  private authService = inject(AuthService);
  sidebarCon = inject(SidebarService);
  private SnackBar = inject(SnackbarService);
  collapsed = true;
  sidebar: Sidebar[] = [
    { name: 'dashboard', iconName: 'home' },
    { name: 'orders', iconName: 'shopping_cart_outlined' },
    { name: 'users', iconName: 'people' },
    { name: 'items', iconName: 'account_balance' },
    { name: 'Tranactions', iconName: 'receipt' },
    { name: 'Reports', iconName: 'insert_chart' },
    { name: 'Messages', iconName: 'message' },
    { name: 'Support', iconName: 'support' },
  ];

  CheckAuth() {
    return this.authService.CheckStatus();
  }

  CheckAuthWithMessage() {
    this.authService.CheckStatus().subscribe((res) => {
      if (!res) this.snackbar();
    });
  }
  snackbar() {
    this.SnackBar.showMessage('You Have To Login First', 'Close');
  }
}
