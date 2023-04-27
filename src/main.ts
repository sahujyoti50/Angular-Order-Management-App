import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {AppModule}  from './app/app.module';
import 'bootstrap';


platformBrowserDynamic().bootstrapModule<any>(AppModule)
  .catch(err => console.error(err));
