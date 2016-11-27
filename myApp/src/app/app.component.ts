// Step 3:
import { Component } from '@angular/core';

//This is decorator
@Component({
  selector: 'app-root', // use as <app-root> in html. if '#app-root' selector will be used as <div id="app-root"></div>   
  templateUrl: './app.component.html', //Step 4: only one should be there, not multiple, not zero. The association happens here
  styleUrls: ['./app.component.css'] // optional - styling for component
})
export class AppComponent {
  title = 'app works!';
}
