///<reference path="../typings/browser/ambient/es6-shim/es6-shim.d.ts" />
///<reference path='../node_modules/immutable/dist/Immutable.d.ts'/>
/// <reference path="../typings/browser.d.ts" />
System.register(['@angular/platform-browser-dynamic', '@angular/core', './app.component', '@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, core_1, app_component_1, router_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                [core_1.provide(Window, { useValue: window })]
            ]).then(function (success) { return console.log('Bootstrap success'); })
                .catch(function (error) { return console.log(error); });
        }
    }
});
