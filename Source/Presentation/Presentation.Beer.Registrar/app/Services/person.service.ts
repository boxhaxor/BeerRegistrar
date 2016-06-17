import {Injectable} from '@angular/core';

import {Person} from '../DomainObjects/person'
import {Beer} from '../DomainObjects/beer'

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class PersonService {
  constructor(private http: Http) { }
  getPerson() { return personPromise; }





  addBeer(name:string, style:string, comments:string, specialIngredients:string, recipe:string) {
    name = name.trim();
    console.log(style);
    style = style.trim();
    comments = comments.trim();
    specialIngredients = specialIngredients.trim();
    recipe = recipe.trim();
    if (name) {
      let beer = new Beer(null, name, style, comments, specialIngredients, recipe);
      this.getBeers().then((beers) => {
        beers.push(beer);
      })
    }
  }
  getBeers()  {
    return  Promise.resolve(person.beers);
  }

  savePerson(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('/api/SubmitEntry', JSON.stringify(person), {headers: headers})
    .toPromise()
               .then(() => {
                 console.log('Worked');
                })
               .catch(function(error) {
                 console.log(error);
               });
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

var person = new Person(null,null,"","","","","","","","","","");

var personPromise = Promise.resolve(person);