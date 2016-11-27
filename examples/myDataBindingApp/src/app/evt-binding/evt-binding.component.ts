import { Component } from '@angular/core';

@Component({
  selector: 'app-evt-binding',
  templateUrl: './evt-binding.component.html',
  styleUrls: ['./evt-binding.component.css']
})
export class EvtBindingComponent{
  onTextClick() {
    alert("Clicked on the para");
  }
}
