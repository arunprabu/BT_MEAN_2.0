// Step 3:
import { Component } from '@angular/core';

// This is Decorator - Component Decorator
// Every component begins with a @Component decorator function that takes a metadata object. 
// The metadata object describes how the HTML template and component class work together.

@Component({
  selector: 'app-root', // use as <app-root> in html. if '#app-root', selector will be used as <div id="app-root"></div>
  templateUrl: './app.component.html', //Step 4: only one should be there, not multiple, not zero.
  styleUrls: ['./app.component.css'] // optional - styling for each component. can have many style urls comma separeted 
})
export class AppComponent {
  title = 'app works!'; // Change this and see it in action
}



/* Variation 2: If you want to use inline template,  Component Decorator for Inline Template */
/* @Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Example Inline Template </h1>
    </div>
  `,
  styles: [`
    h1{
      color: red;
    }
  `]
})
export class AppComponent {
   title = 'app works!'; // Change this and see it in action
}  */
/* Look at source and see how style applied to this component - This is called as view encapsulation */
