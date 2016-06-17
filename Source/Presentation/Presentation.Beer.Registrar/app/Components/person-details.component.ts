import {Component, Input}     from '@angular/core';
import {Router, RouteSegment } from '@angular/router';
import {PersonService}   from '../Services/person.service';
import {Person} from '../DomainObjects/person';

@Component({
  selector: 'person-details',
  templateUrl: 'StaticViews/Components/person-details.html',
})

export class PersonDetailsComponent { 
  @Input() 
  person: Person;
  constructor(private _personService: PersonService,
      private router: Router
      ){
	  console.log('Constructor for PersonDetailsComponent');
  }
  sendPerson(){
    this._personService.savePerson();
  }
  sendSample(){
    console.log('sendingSample');
    this._personService.sendSample();
  }
}