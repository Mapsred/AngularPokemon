import {Component, OnInit} from '@angular/core';
import {PokemonService} from "./pokemon.service";
import {Pokemon} from "../model/pokemon";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  private pokemons: any = [];
  private title = "Pokemons";

  constructor(protected pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
  }

  getPokemon(url: string): any {
    return this.pokemonService.getPokemon(url).subscribe(pokemon => this.pokemons.push(<Pokemon>pokemon));
  }

  getId(url: string) {
    let splited = url.split("/");

    return splited[splited.length - 2];
  }

  clicked(event, url: string) {
    console.log(this.getId(url));
  }

}
