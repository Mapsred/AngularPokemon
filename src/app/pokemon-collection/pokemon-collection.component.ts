import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../pokemon/pokemon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-collection',
  templateUrl: './pokemon-collection.component.html',
  styleUrls: ['./pokemon-collection.component.scss']
})
export class PokemonCollectionComponent implements OnInit {
  private collection;
  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.collection = this.pokemonService.getCollection();
  }

  clicked(event, id: number) {
    this.router.navigate(['/detail', id]);
  }
}
