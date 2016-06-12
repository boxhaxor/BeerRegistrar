import {Injectable} from '@angular/core';

import {Beer} from '../DomainObjects/beer'
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BeerService {
  constructor(private http: Http) { }
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

  sendSample(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('/api/SubmitEntry', JSON.stringify({"SubmitterId":0,"SubmitterGuid":"","Name":"Scott Carter","Email":"Email","ClubName":"club","AhaNumber":"Aha","PhoneNumber":"phone","Line1":"line1","Line2":"line2","City":"city","State":"state","ZipCode":"zip","Beers":[{"BeerEntryId":0,"Name":"beer","Type":"2A","SpecialIngredients":"special","Comments":"comments","Recipe":"recipe"}]}), {headers: headers})
    .toPromise()
               .then(() => {
                 console.log('Worked');
                })
               .catch(function(error) {
                 console.log(error);
               });

  }
}

var beers = [
  new Beer(1, 'Princess Held Captive', '1C', 'Comment', 'Special ingred', 'Recipe')
];

var beersPromise = Promise.resolve(beers);