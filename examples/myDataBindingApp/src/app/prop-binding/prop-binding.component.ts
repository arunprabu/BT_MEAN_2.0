import { Component } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  templateUrl: './prop-binding.component.html',
  styleUrls: ['./prop-binding.component.css']
})
export class PropBindingComponent {
  dynValue;
  constructor() {
     this.dynValue = "Dynamic Value";
   }

  shouldApply() {
    return true;
  }
}
