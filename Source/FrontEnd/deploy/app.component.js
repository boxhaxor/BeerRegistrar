System.register(['@angular/core', '@angular/router', './Components/beer-list.component', './Components/add-beer.component', './Services/beer.service', './Services/person.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, beer_list_component_1, add_beer_component_1, beer_service_1, person_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (beer_list_component_1_1) {
                beer_list_component_1 = beer_list_component_1_1;
            },
            function (add_beer_component_1_1) {
                add_beer_component_1 = add_beer_component_1_1;
            },
            function (beer_service_1_1) {
                beer_service_1 = beer_service_1_1;
            },
            function (person_service_1_1) {
                person_service_1 = person_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_beerService, router) {
                    this._beerService = _beerService;
                    this.router = router;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.router.navigate(['/beer-list']);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'views/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [beer_service_1.BeerService, person_service_1.PersonService]
                    }),
                    router_1.Routes([
                        { path: '/beer-list', component: beer_list_component_1.BeerListComponent },
                        { path: '/add-beer', component: add_beer_component_1.AddBeerComponent }
                    ]), 
                    __metadata('design:paramtypes', [beer_service_1.BeerService, router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
