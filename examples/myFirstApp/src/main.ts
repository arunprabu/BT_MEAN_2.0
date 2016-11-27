// All these are script files... they will be loaded and injected inside index page
import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';   //imports app.module.ts file here

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
// The above line helps bootstrap the app using the AppModule files. look at app.module.ts 
