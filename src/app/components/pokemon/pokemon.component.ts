import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokedexService } from '../../services/pokedex.service';
import { PokedexComponent } from '../pokedex/pokedex.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html'
})
export class PokemonComponent {

  pokemon:any = {};
  tipo1Img:string = "";
  tipo2Img:string = "";

  constructor( private activatedRoute: ActivatedRoute,
               private _pokedexService: PokedexService
    ) {

    this.activatedRoute.params.subscribe(params =>{
      this.pokemon = this._pokedexService.getPokemon( params['id'] );
      this.tipo1Img = "assets/img/" + (this.pokemon.tipo1 as string).toLowerCase() + ".png";
      this.tipo2Img = "assets/img/" + (this.pokemon.tipo2 as string).toLowerCase() + ".png";
    })

  }


}
