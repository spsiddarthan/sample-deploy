import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { QuickstartNgCliAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(QuickstartNgCliAppComponent);
