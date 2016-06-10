
///<reference path="../typings/browser/ambient/es6-shim/es6-shim.d.ts" />
///<reference path='../node_modules/immutable/dist/Immutable.d.ts'/>
/// <reference path="../typings/browser.d.ts" />

import {bootstrap}        from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';

import {AppComponent}     from './app.component';
import {ROUTER_PROVIDERS} from '@angular/router';
bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  [provide(Window, {useValue: window})]
]).then(success => console.log('Bootstrap success'))
.catch(error => console.log(error));