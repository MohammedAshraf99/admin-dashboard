import { Component } from '@angular/core';
import { NavbtnComponent } from '../../shared/navbtn/navbtn.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbtnComponent, MatIcon],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {}
