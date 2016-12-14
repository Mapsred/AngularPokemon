import {Component, OnInit} from '@angular/core';
import {PokemonService} from "./pokemon.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  private pokemons:any = [];
  private title = "Pokemons"
  constructor(protected pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons);
  }

}
