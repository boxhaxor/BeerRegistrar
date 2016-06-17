import {Component}  from '@angular/core';
import {Beer} from '../DomainObjects/beer';
import {Person} from '../DomainObjects/person';
import {ViewBeerComponent}     from './view-beer.component';
import {PersonDetailsComponent}     from './person-details.component';
import {PersonService} from '../Services/person.service'

@Component({
    templateUrl: 'StaticViews/Components/beer-list.html',
  directives: [ViewBeerComponent, PersonDetailsComponent]
})

export class BeerListComponent{ 
  title = 'Beer List Component';
  beers: Beer[];
  selectedBeer: Beer;
  person: Person;
  styles: any;

  constructor(private window: Window,
              private _personService: PersonService){
    console.log('Constructor for BeerList');
    this.getBeers();
    this._personService.getPerson().then(person => this.person = person);
      
    if(this.styles){
      this.styles = this.window.com.beer.registrar.bjcpstyles.allStyles;
    }
  }

  getBeers() {
	  this._personService.getBeers().then(beers => this.beers = beers);
  }
  onSelect(beer: Beer){
    if(this.selectedBeer == beer){
      this.selectedBeer = null;
    } else {
	    this.selectedBeer = beer;      
    }
	  console.log('Beer selected.');
  }
}