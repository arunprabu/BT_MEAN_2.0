import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SiComponent } from './si/si.component';
import { PropBindingComponent } from './prop-binding/prop-binding.component';
import { CustPropBindingComponent } from './cust-prop-binding/cust-prop-binding.component';
import { EvtBindingComponent } from './evt-binding/evt-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    SiComponent,
    PropBindingComponent,
    CustPropBindingComponent,
    EvtBindingComponent,
    TwoWayDataBindingComponent
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
