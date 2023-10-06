import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input()
  appHighlight!: string;

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter')
  addHighlith() {
    this.element.nativeElement.style.backgroundColor = this.appHighlight;
  }
  @HostListener('mouseleave')
  removeHighlith() {
    this.element.nativeElement.style.backgroundColor = '';
  }
}
