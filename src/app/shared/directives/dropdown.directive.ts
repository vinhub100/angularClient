
import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elementRef: ElementRef) { }
  private dropdownParentEl = this.elementRef.nativeElement.closest('.dropdown');
  private isShow  = false;



  @HostListener('click') open() {
    this.isShow = !this.isShow;
    if (this.isShow) {
      this.dropdownParentEl.classList.add('show');
      this.dropdownParentEl.querySelector('.dropdown-menu').classList.add('show');
      console.log('Button - Inside directive');
    } else {
      this.dropdownParentEl.classList.remove('show');
      this.dropdownParentEl.querySelector('.dropdown-menu').classList.remove('show');
      console.log('Button - Outside directive');
    }
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.elementRef.nativeElement.contains(event.target) && this.isShow) {
      this.dropdownParentEl.classList.add('show');
      this.dropdownParentEl.querySelector('.dropdown-menu').classList.add('show');
      console.log('Host - Inside directive');
    } else {
      this.dropdownParentEl.classList.remove('show');
      this.dropdownParentEl.querySelector('.dropdown-menu').classList.remove('show');
      this.isShow = false;
      console.log('Host - Outside directive');
    }
  }

}
