import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggle]',
})
export class ToggleDirective {
  constructor() {}
  @HostBinding('class.clicked') toggle = false;
  @HostListener('click') onClick() {
    this.toggle = !this.toggle;
  }
}
