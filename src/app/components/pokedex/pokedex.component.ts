import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html'
})
export class PokedexComponent implements OnInit {

  pokedex:any[] = [];

  constructor( private _pokedexService:PokedexService,
               private router:Router
    ) { }

  ngOnInit(): void {
    this.pokedex = this._pokedexService.getPokedex();
  }

  VerPokemon(idx:number){
    this.router.navigate( ['/pokemon',idx] )
  }

}
