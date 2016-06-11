System.register(['@angular/core', '@angular/router', '../Services/beer.service'], function(exports_1, context_1) {
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
    var core_1, router_1, beer_service_1;
    var AddBeerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (beer_service_1_1) {
                beer_service_1 = beer_service_1_1;
            }],
        execute: function() {
            AddBeerComponent = (function () {
                function AddBeerComponent(_beerService, router, window) {
                    this._beerService = _beerService;
                    this.router = router;
                    this.window = window;
                    this.styles = this.window.com.beer.registrar.bjcpstyles.allStyles;
                    console.log('Constructor for addBeer');
                }
                AddBeerComponent.prototype.addBeer = function (name, comments, specialIngredients, recipe) {
                    this._beerService.addBeer(name, this.selectedOption, comments, specialIngredients, recipe);
                    this.afterBeerAdd();
                };
                AddBeerComponent.prototype.afterBeerAdd = function () {
                    this.router.navigate(['/beer-list']);
                };
                ;
                AddBeerComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'StaticViews/Components/add-beer.html'
                    }), 
                    __metadata('design:paramtypes', [beer_service_1.BeerService, router_1.Router, Window])
                ], AddBeerComponent);
                return AddBeerComponent;
            }());
            exports_1("AddBeerComponent", AddBeerComponent);
        }
    }
});
