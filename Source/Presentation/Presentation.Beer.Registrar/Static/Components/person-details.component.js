System.register(['@angular/core', '@angular/router', '../Services/person.service', '../DomainObjects/person'], function(exports_1, context_1) {
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
    var core_1, router_1, person_service_1, person_1;
    var PersonDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (person_service_1_1) {
                person_service_1 = person_service_1_1;
            },
            function (person_1_1) {
                person_1 = person_1_1;
            }],
        execute: function() {
            PersonDetailsComponent = (function () {
                function PersonDetailsComponent(_personService, router) {
                    this._personService = _personService;
                    this.router = router;
                    console.log('Constructor for PersonDetailsComponent');
                }
                PersonDetailsComponent.prototype.sendPerson = function () {
                    this._personService.savePerson();
                };
                PersonDetailsComponent.prototype.sendSample = function () {
                    console.log('sendingSample');
                    this._personService.sendSample();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', person_1.Person)
                ], PersonDetailsComponent.prototype, "person", void 0);
                PersonDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'person-details',
                        templateUrl: 'StaticViews/Components/person-details.html',
                    }), 
                    __metadata('design:paramtypes', [person_service_1.PersonService, router_1.Router])
                ], PersonDetailsComponent);
                return PersonDetailsComponent;
            }());
            exports_1("PersonDetailsComponent", PersonDetailsComponent);
        }
    }
});
