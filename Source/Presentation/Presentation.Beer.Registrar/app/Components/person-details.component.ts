import {Component, Input}     from '@angular/core';
import {Router, RouteSegment } from '@angular/router';
import {BeerService}   from '../Services/beer.service';
import {Person} from '../DomainObjects/person';

@Component({
  selector: 'person-details',
  templateUrl: 'StaticViews/Components/person-details.html',
})

export class PersonDetailsComponent { 
  @Input() 
  person: Person;
  constructor(private _beerService: BeerService,
      private router: Router
      ){
	  console.log('Constructor for PersonDetailsComponent');
  }

  sendSample(){
    console.log('sendingSample');
    this._beerService.sendSample();
  }
}