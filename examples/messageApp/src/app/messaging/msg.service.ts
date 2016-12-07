import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MsgService {

  constructor(private http:Http) {
    //http is injected in constructor. to fully do it folow Step 4.
  }

  getMessage(){
      return this.http.get("/message.json");
      //https://ng2-msg-service.firebaseio.com/message.json
  }

}
