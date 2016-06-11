import {Injectable} from '@angular/core';

import {Person} from '../DomainObjects/person'


@Injectable()
export class PersonService {
  getPerson() { return personPromise; }
}

var person = new Person(null,"","","","","","","","","","");

var personPromise = Promise.resolve(person);