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

  capture() {
    this.pokemonService.collectionToggle(this.pokemon);
  }

}
