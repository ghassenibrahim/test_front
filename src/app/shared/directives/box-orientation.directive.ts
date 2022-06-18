import { Directive, Input, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from '../services/lang.service';

@Directive({
  selector: '[boxOriented]'
})
export class BoxOrientedDirective implements OnInit {
  @Input() reverse;
  @Input() hideIfRTL;
  @Input() hideIfLTR;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    translate: TranslateService,
    private langService: LangService
  ) {}

  ngOnInit() {
    this.langService.orientation.subscribe(orientation => {
      if (orientation === 'ltr') {
        if (this.hideIfLTR === true) {
          this.renderer.addClass(this.el.nativeElement, 'invisible');
        } else {
          this.renderer.removeClass(this.el.nativeElement, 'invisible');
        }
        if (this.reverse === true) {
          this.renderer.removeClass(this.el.nativeElement, 'box-float-left');
          this.renderer.addClass(this.el.nativeElement, 'box-float-right');
        } else {
          this.renderer.removeClass(this.el.nativeElement, 'box-float-right')
          this.renderer.addClass(this.el.nativeElement, 'box-float-left');
        }
      } else if (orientation === 'rtl') {
        if (this.hideIfRTL === true) {
          this.renderer.addClass(this.el.nativeElement, 'invisible');
        } else {
          this.renderer.removeClass(this.el.nativeElement, 'invisible');
        }
        if (this.reverse === true) {
          this.renderer.removeClass(this.el.nativeElement, 'box-float-right')
          this.renderer.addClass(this.el.nativeElement, 'box-float-left');
        } else {
          this.renderer.removeClass(this.el.nativeElement, 'box-float-left');
          this.renderer.addClass(this.el.nativeElement, 'box-float-right');
        }
      }
    })
  }
}
