import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
        <p>&copy; 2016 lastDayDemo App, Inc.</p>
        <app-nav>
          <ul>
            <li role="presentation" class="active"><a href="#">Home</a></li>
            <li role="presentation"><a href="#">Notes</a></li>
          </ul>
        </app-nav>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
