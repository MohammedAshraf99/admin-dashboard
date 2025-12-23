import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgFallback]',
  standalone: true
})
export class ImgFallbackDirective {

    @Input() src: string = '';
    @Input() appFallbackImage: string = 'assets/images/default.png';
    
    @HostBinding('src') currentSrc: string = '';
  
    constructor() {}
  
    ngOnChanges() {
      this.currentSrc = this.src;
    }
  
    @HostListener('error')
    onError() {
      this.currentSrc = this.appFallbackImage;
    }
  
}
