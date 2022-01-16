import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[apptext]',
})
export class HighlightText implements OnInit {
  constructor(private el: ElementRef) {}
  ngOnInit() {
    (<HTMLElement>this.el.nativeElement).style.backgroundColor = 'lightblue';
  }
}
