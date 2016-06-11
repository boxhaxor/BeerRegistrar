import {Injectable} from '@angular/core';

import {Beer} from '../DomainObjects/beer'


@Injectable()
export class BeerService {
  getBeers() { return beersPromise; }

  getBeer(id: number | string) {
    return beersPromise
      .then(beers => beers.filter(c => c.id === +id)[0]);
  }


  static nextCrisisId = 100;

  addBeer(name:string, style:string, comments:string, specialIngredients:string, recipe:string) {
    name = name.trim();
    console.log(style);
    style = style.trim();
    comments = comments.trim();
    specialIngredients = specialIngredients.trim();
    recipe = recipe.trim();
    if (name) {
      let beer = new Beer(BeerService.nextCrisisId++, name, style, comments, specialIngredients, recipe);
      beersPromise.then(beers => beers.push(beer));
    }
  }
}

var beers = [
  new Beer(1, 'Princess Held Captive', '1C', 'Comment', 'Special ingred', 'Recipe')
];

var beersPromise = Promise.resolve(beers);