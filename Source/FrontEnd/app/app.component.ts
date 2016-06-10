import {Component, OnInit, provide} from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

import {BeerListComponent}   from './Components/beer-list.component';
import {AddBeerComponent}     from './Components/add-beer.component';

import {BeerService} from './Services/beer.service'
import {PersonService} from './Services/person.service'

@Component({
  selector: 'my-app',
  templateUrl: 'views/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers:  [BeerService, PersonService]
})

@Routes([
  { path: '/beer-list', component: BeerListComponent},//useAsDefault: true
  { path: '/add-beer', component: AddBeerComponent}
])
export class AppComponent implements OnInit {
    constructor(private _beerService: BeerService,
    private router: Router) {
      
    }
    ngOnInit() {
      this.router.navigate(['/beer-list']);
    }
 }
