import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../pokemon/pokemon.service";
import {ActivatedRoute} from "@angular/router";
import {Pokemon} from "../model/pokemon";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})

export class PokemonDetailComponent implements OnInit {
  private pokemon: Pokemon;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.pokemonService.getPokemon(this.route.snapshot.params['id']).then((pokemon: Pokemon) => this.pokemon = <Pokemon>pokemon);
  }

  getAbilities() {
    let abilities = [];

    for(let ability of this.pokemon.abilities)  {
      abilities.push(ability.ability.name);
    }

    return abilities.join(", ");
  }

  getStats() {
    let stats = [];

    for(let stat of this.pokemon.stats)  {
      stats.push(stat.stat.name+ "("+ stat.base_stat +" pts)");
    }

    return stats.join(", ");
  }

  getMoves() {
    let moves = [];
    for (let move of this.pokemon.moves) {
      moves.push(move.move.name);
    }

    return moves.join(", ");
  }

  getTypes() {
    let types = [];
    for (let type of this.pokemon.types) {
      types.push(type.type.name)
    }

    return types.join(", ");
  }

  capture() {
    console.log(this.pokemon)
  }

}
