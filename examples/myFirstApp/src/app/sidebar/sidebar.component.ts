import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
      <aside>
        <ng-content></ng-content>
      </aside>
  `,
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
