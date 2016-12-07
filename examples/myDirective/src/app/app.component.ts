import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  flag = true;

  navMenus = [
    'Home',
    'Products',
    'Services',
    'About',
    'Contact'
  ]

  age = 10;
  
  onToggle(){
    console.log("toggle");
    this.flag = !this.flag;
  }
}
