import { Directive, Input, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from '../services/lang.service';

@Directive({
  selector: '[textOriented]'
})
export class TextOrientedDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private langService: LangService
  ) { }

  ngOnInit() {
    this.langService.orientation.subscribe(orientation => {
      if (orientation === 'ltr') {
        this.renderer.removeClass(this.el.nativeElement, 'text-align-right')
        this.renderer.addClass(this.el.nativeElement, 'text-align-left');
      } else if (orientation === 'rtl') {
        this.renderer.removeClass(this.el.nativeElement, 'text-align-left');
        this.renderer.addClass(this.el.nativeElement, 'text-align-right');
      }
    })
  }
}
