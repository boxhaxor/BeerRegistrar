System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Beer;
    return {
        setters:[],
        execute: function() {
            Beer = (function () {
                function Beer(id, name, style, comments, specialIngredients, recipe) {
                    this.id = id;
                    this.name = name;
                    this.style = style;
                    this.comments = comments;
                    this.specialIngredients = specialIngredients;
                    this.recipe = recipe;
                }
                return Beer;
            }());
            exports_1("Beer", Beer);
        }
    }
});
