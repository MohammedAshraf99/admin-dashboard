import { Component, HostBinding, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbtn',
  standalone: true,
  imports: [MatIcon, MatButtonModule,RouterLink,RouterLinkActive],
  templateUrl: './navbtn.component.html',
  styleUrl: './navbtn.component.scss',
})
export class NavbtnComponent {
  @Input()routerName=''
  @HostBinding('class') class = '';

}
