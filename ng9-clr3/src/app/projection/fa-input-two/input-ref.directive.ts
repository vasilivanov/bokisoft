import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[inputRef]'
})
export class InputRefDirective {

  focus = false;

  constructor() { }

  @HostListener('blur')
  onBlur() {
    console.log('input blurred');
    this.focus = false;
  }

  @HostListener('focus')
  onFocus() {
    console.log('input focused');
    this.focus = true;
  }

}
