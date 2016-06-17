import {Component, OnInit, provide} from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

import {BeerListComponent}   from './Components/beer-list.component';
import {AddBeerComponent}     from './Components/add-beer.component';

import {PersonService} from './Services/person.service'
import {Person} from './DomainObjects/person'

@Component({
  selector: 'my-app',
  templateUrl: 'StaticViews/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers:  [PersonService]
})

@Routes([
  { path: '/beer-list', component: BeerListComponent},//useAsDefault: true
  { path: '/add-beer', component: AddBeerComponent}
])
export class AppComponent implements OnInit {
    constructor(private _personService: PersonService,
    private router: Router) {
      
    }
    ngOnInit() {
      this.router.navigate(['/beer-list']);
    }
 }
