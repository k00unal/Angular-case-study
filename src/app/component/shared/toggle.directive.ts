import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[toggleClass]',
})
export class ToggleDirective {
  @HostBinding('class.Show') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
