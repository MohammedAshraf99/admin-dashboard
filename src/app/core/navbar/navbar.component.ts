import { Component, inject } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ProfileComponent } from '../../features/profile/profile.component';
import { SidebarService } from '../../services/sidebar.service';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';
import { AsyncPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchComponent, ProfileComponent, AsyncPipe, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private sidebar = inject(SidebarService);
  private authService = inject(AuthService);
  private SnackBar = inject(SnackbarService);

  Checklogin() {
    return this.authService.CheckStatus();
  }

  login() {
    this.snackbar('You Are Login Now', 'Close');
    return this.authService.ChangeStatus();
  }
  logout() {
    this.snackbar('You Are Logout', 'Close');
    this.authService.ChangeStatus();
  }
  snackbar(message: string, action: string) {
    this.SnackBar.showMessage(message, action);
  }

  showbar = false;

  showSideBar() {
    this.showbar = !this.showbar;
    if (this.showbar) {
      this.sidebar.open();
    } else {
      this.sidebar.close();
    }
  }
}
