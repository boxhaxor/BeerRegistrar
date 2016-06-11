var Beer = (function () {
    function Beer(id, name, style, comments, specialIngredients, recipe) {
        this.id = id;
        this.name = name;
        this.style = style;
        this.comments = comments;
        this.specialIngredients = specialIngredients;
        this.recipe = recipe;
    }
    return Beer;
})();
exports.Beer = Beer;
