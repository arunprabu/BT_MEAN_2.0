import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{

  signupDetails = {
    fullname: '',
    email: '',
    password: ''
  }

  constructor() { }

  onFormSubmit(form:NgForm){
    console.log(form); 
    
    console.log(this.signupDetails)
  }
}
