import { Component, OnInit } from '@angular/core';
import { MsgService } from "./msg.service";
import {Response } from "@angular/http";
import "rxjs";

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {
  title= ""
  constructor(private msgService: MsgService) {
    console.log("Cons")
  }

  ngOnInit() {
    console.log("ngInit")
    this.msgService.getMessage() //this is to send req
        .subscribe(
          (data) => console.log(data)
          //  (data: Response ) => console.log(data.json()) //import {Response } from "@angular/http";
        ); //subscribe is to listen to response    
  }

}
