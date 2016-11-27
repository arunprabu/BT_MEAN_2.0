import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  templateUrl: './prop-binding.component.html',
  styleUrls: ['./prop-binding.component.css']
})
export class PropBindingComponent implements OnInit {
  dynValue;
  constructor() {
     this.dynValue = "Dynamic Value";
   }

  ngOnInit() {
  }

  shouldApply() {
    return true;
  }
}
