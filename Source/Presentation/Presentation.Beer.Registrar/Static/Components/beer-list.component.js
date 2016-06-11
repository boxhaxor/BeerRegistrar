System.register(['@angular/core', '../Services/beer.service', './view-beer.component', './person-details.component', '../Services/person.service'], function(exports_1, context_1) {
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
    var core_1, beer_service_1, view_beer_component_1, person_details_component_1, person_service_1;
    var BeerListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (beer_service_1_1) {
                beer_service_1 = beer_service_1_1;
            },
            function (view_beer_component_1_1) {
                view_beer_component_1 = view_beer_component_1_1;
            },
            function (person_details_component_1_1) {
                person_details_component_1 = person_details_component_1_1;
            },
            function (person_service_1_1) {
                person_service_1 = person_service_1_1;
            }],
        execute: function() {
            BeerListComponent = (function () {
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
                    }), 
                    __metadata('design:paramtypes', [beer_service_1.BeerService, Window, person_service_1.PersonService])
                ], BeerListComponent);
                return BeerListComponent;
            }());
            exports_1("BeerListComponent", BeerListComponent);
        }
    }
});
