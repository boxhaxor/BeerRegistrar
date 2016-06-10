System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Person;
    return {
        setters:[],
        execute: function() {
            Person = (function () {
                function Person(id, name, email, phone, clubName, ahaNumber, line1, line2, city, state, zip) {
                    this.id = id;
                    this.name = name;
                    this.email = email;
                    this.phone = phone;
                    this.clubName = clubName;
                    this.ahaNumber = ahaNumber;
                    this.line1 = line1;
                    this.line2 = line2;
                    this.city = city;
                    this.state = state;
                    this.zip = zip;
                }
                return Person;
            }());
            exports_1("Person", Person);
        }
    }
});
