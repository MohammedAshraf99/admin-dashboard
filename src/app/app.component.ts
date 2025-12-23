import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { LoaderService } from './services/loader.service';
import { LoaderComponent } from './loader/loader.component';
import { AsyncPipe } from '@angular/common';
import { SidebarService } from './services/sidebar.service';
import { delay } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    LoaderComponent,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  $loading = inject(LoaderService);
  sidebarCon = inject(SidebarService);

  ngOnInit(): void {
    this.$loading.hide();
  }
  title = 'admin-dashboard';
}
