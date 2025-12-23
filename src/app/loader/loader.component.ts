import { Component, inject, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent implements OnInit {
  $loading = inject(LoaderService);
  ngOnInit(): void {
    
    this.$loading.loading$.subscribe();
  }
}
