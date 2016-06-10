System.register(['@angular/core', '../DomainObjects/beer'], function(exports_1, context_1) {
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
    var core_1, beer_1;
    var BeerService, beers, beersPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (beer_1_1) {
                beer_1 = beer_1_1;
            }],
        execute: function() {
            BeerService = (function () {
                function BeerService() {
                }
                BeerService.prototype.getBeers = function () { return beersPromise; };
                BeerService.prototype.getBeer = function (id) {
                    return beersPromise
                        .then(function (beers) { return beers.filter(function (c) { return c.id === +id; })[0]; });
                };
                BeerService.prototype.addBeer = function (name, style, comments, specialIngredients, recipe) {
                    name = name.trim();
                    console.log(style);
                    style = style.trim();
                    comments = comments.trim();
                    specialIngredients = specialIngredients.trim();
                    recipe = recipe.trim();
                    if (name) {
                        var beer_2 = new beer_1.Beer(BeerService.nextCrisisId++, name, style, comments, specialIngredients, recipe);
                        beersPromise.then(function (beers) { return beers.push(beer_2); });
                    }
                };
                BeerService.nextCrisisId = 100;
                BeerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], BeerService);
                return BeerService;
            }());
            exports_1("BeerService", BeerService);
            beers = [
                new beer_1.Beer(1, 'Princess Held Captive', '1C', 'Comment', 'Special ingred', 'Recipe')
            ];
            beersPromise = Promise.resolve(beers);
        }
    }
});
