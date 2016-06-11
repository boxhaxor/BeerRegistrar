import {Component, Input}     from '@angular/core';
import {Router, RouteSegment } from '@angular/router';
import {BeerService}   from '../Services/beer.service';
import {Beer} from '../DomainObjects/beer';

@Component({
  selector: 'view-beer',
  templateUrl: 'StaticViews/Components/view-beer.html',
})

export class ViewBeerComponent { 
  @Input() 
  beer: Beer;
  constructor(private _beerService: BeerService,
      private router: Router){
	  console.log('Constructor for ViewBeerComponent');
  }
}