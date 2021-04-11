import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding("class.open") isOpen=false;

  @HostListener("document:click",["$event"]) toggleOpen(event:Event){
    console.log(event.target);
    console.log(this.elRef.nativeElement);
    this.isOpen= this.elRef.nativeElement.contains(event.target)? !this.isOpen : false;
    // this.isOpen=!this.isOpen;
  }

  constructor(private elRef:ElementRef) { }

}
