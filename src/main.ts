// src/main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { defineCustomElements as jeepDefineCustomElements } from 'jeep-sqlite/loader';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));


jeepDefineCustomElements(window);
