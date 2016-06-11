var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var beer_list_component_1 = require('./Components/beer-list.component');
var add_beer_component_1 = require('./Components/add-beer.component');
var beer_service_1 = require('./Services/beer.service');
var person_service_1 = require('./Services/person.service');
var AppComponent = (function () {
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
        ])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
