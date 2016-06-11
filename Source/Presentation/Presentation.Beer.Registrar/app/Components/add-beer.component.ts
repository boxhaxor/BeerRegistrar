import {Component}     from '@angular/core';
import {Router, RouteSegment } from '@angular/router';
import {BeerService}   from '../Services/beer.service';

@Component({
  templateUrl: 'StaticViews/Components/add-beer.html'
})

export class AddBeerComponent { 
  styles: any;
  selectedOption: string;
  
  constructor(private _beerService: BeerService,
      private router: Router,
      private window: Window) {
    this.styles = this.window.com.beer.registrar.bjcpstyles.allStyles;

	  console.log('Constructor for addBeer');
  }
  addBeer(name:string, comments:string, specialIngredients:string, recipe:string){
    this._beerService.addBeer(name, this.selectedOption, comments, specialIngredients, recipe);
    this.afterBeerAdd();
  }
  
  afterBeerAdd()
  {
    this.router.navigate(['/beer-list']);
  };
}