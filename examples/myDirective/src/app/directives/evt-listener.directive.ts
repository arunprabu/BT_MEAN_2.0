import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[evtListener]'
})
export class EvtListenerDirective {
  // to listen to events in directive 
  // pass the $event as dependency injection
  @HostListener('mouseover', ['$event']) elementMouseOver(event){
    console.log(event);
    alert("fired on hover");
  }

  constructor() { 
    console.log("inside constructor");
  }

  
}
