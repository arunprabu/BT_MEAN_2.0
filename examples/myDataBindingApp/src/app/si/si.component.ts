import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-si',
  templateUrl: './si.component.html',
  styleUrls: ['./si.component.css']
})
export class SiComponent implements OnInit {
  //like this
  myString = "wonderfully";

  constructor() {
    // or inside constructor -- like this 
    // this.myString = "Wonderfully";
  }

  ngOnInit() {
  }

}
