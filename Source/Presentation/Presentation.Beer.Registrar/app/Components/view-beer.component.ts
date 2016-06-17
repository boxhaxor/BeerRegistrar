import {Component, Input}     from '@angular/core';
import {Router, RouteSegment } from '@angular/router';
import {PersonService}   from '../Services/person.service';
import {Beer} from '../DomainObjects/beer';

@Component({
  selector: 'view-beer',
  templateUrl: 'StaticViews/Components/view-beer.html',
})

export class ViewBeerComponent { 
  @Input() 
  beer: Beer;
  constructor(private _personService: PersonService,
      private router: Router){
	  console.log('Constructor for ViewBeerComponent');
  }
}