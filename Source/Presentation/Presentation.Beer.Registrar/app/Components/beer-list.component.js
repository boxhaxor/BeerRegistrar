var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var view_beer_component_1 = require('./view-beer.component');
var person_details_component_1 = require('./person-details.component');
var BeerListComponent = (function () {
    function BeerListComponent(_beerService, window, _personService) {
        var _this = this;
        this._beerService = _beerService;
        this.window = window;
        this._personService = _personService;
        this.title = 'Beer List Component';
        console.log('Constructor for BeerList');
        this.getBeers();
        this._personService.getPerson().then(function (person) { return _this.person = person; });
        if (this.styles) {
            this.styles = this.window.com.beer.registrar.bjcpstyles.allStyles;
        }
    }
    BeerListComponent.prototype.getBeers = function () {
        var _this = this;
        this._beerService.getBeers().then(function (beers) { return _this.beers = beers; });
    };
    BeerListComponent.prototype.onSelect = function (beer) {
        if (this.selectedBeer == beer) {
            this.selectedBeer = null;
        }
        else {
            this.selectedBeer = beer;
        }
        console.log('Beer selected.');
    };
    BeerListComponent = __decorate([
        core_1.Component({
            templateUrl: 'StaticViews/Components/beer-list.html',
            directives: [view_beer_component_1.ViewBeerComponent, person_details_component_1.PersonDetailsComponent]
        })
    ], BeerListComponent);
    return BeerListComponent;
})();
exports.BeerListComponent = BeerListComponent;
