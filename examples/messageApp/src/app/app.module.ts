import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MessagingComponent } from './messaging/messaging.component';
import { MsgService } from './messaging/msg.service';

@NgModule({
  declarations: [
    AppComponent,
    MessagingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
