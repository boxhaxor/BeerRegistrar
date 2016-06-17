System.register(['@angular/core', '../DomainObjects/person', '../DomainObjects/beer', '@angular/http', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
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
    var core_1, person_1, beer_1, http_1;
    var PersonService, person, personPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (person_1_1) {
                person_1 = person_1_1;
            },
            function (beer_1_1) {
                beer_1 = beer_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            PersonService = (function () {
                function PersonService(http) {
                    this.http = http;
                }
                PersonService.prototype.getPerson = function () { return personPromise; };
                PersonService.prototype.addBeer = function (name, style, comments, specialIngredients, recipe) {
                    name = name.trim();
                    console.log(style);
                    style = style.trim();
                    comments = comments.trim();
                    specialIngredients = specialIngredients.trim();
                    recipe = recipe.trim();
                    if (name) {
                        var beer_2 = new beer_1.Beer(null, name, style, comments, specialIngredients, recipe);
                        this.getBeers().then(function (beers) {
                            beers.push(beer_2);
                        });
                    }
                };
                PersonService.prototype.getBeers = function () {
                    return Promise.resolve(person.beers);
                };
                PersonService.prototype.savePerson = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    this.http.post('/api/SubmitEntry', JSON.stringify(person), { headers: headers })
                        .toPromise()
                        .then(function () {
                        console.log('Worked');
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                };
                PersonService.prototype.sendSample = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    this.http.post('/api/SubmitEntry', JSON.stringify({ "SubmitterId": 0, "SubmitterGuid": "", "Name": "Scott Carter", "Email": "Email", "ClubName": "club", "AhaNumber": "Aha", "PhoneNumber": "phone", "Line1": "line1", "Line2": "line2", "City": "city", "State": "state", "ZipCode": "zip", "Beers": [{ "BeerEntryId": 0, "Name": "beer", "Type": "2A", "SpecialIngredients": "special", "Comments": "comments", "Recipe": "recipe" }] }), { headers: headers })
                        .toPromise()
                        .then(function () {
                        console.log('Worked');
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                };
                PersonService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PersonService);
                return PersonService;
            }());
            exports_1("PersonService", PersonService);
            person = new person_1.Person(null, "", "", "", "", "", "", "", "", "", "", "");
            personPromise = Promise.resolve(person);
        }
    }
});
