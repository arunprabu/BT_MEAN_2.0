import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ColorizerDirective } from './directives/colorizer.directive';
import { EvtListenerDirective } from './directives/evt-listener.directive';
import { ExampleDirDirective } from './example-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorizerDirective,
    EvtListenerDirective,
    ExampleDirDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
