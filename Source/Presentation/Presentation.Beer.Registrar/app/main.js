///<reference path="../typings/browser/ambient/es6-shim/es6-shim.d.ts" />
///<reference path='../node_modules/immutable/dist/Immutable.d.ts'/>
/// <reference path="../typings/browser.d.ts" />
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var router_1 = require('@angular/router');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    [core_1.provide(Window, { useValue: window })]
]).then(function (success) { return console.log('Bootstrap success'); })
    .catch(function (error) { return console.log(error); });
