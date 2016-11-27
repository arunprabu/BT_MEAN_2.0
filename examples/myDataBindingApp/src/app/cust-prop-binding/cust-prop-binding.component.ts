import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cust-prop-binding',
  templateUrl: './cust-prop-binding.component.html',
  styleUrls: ['./cust-prop-binding.component.css']
})
export class CustPropBindingComponent {
  @Input() someNumber = 10;
}
