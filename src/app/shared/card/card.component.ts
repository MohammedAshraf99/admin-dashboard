import { Component, Input } from '@angular/core';
import { ImgFallbackDirective } from '../../core/directive/img-fallback.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ImgFallbackDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() src: string = './assets/img/data-analytics_11389924.png';
}
