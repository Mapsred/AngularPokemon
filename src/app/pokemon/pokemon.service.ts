import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Pokemons }        from '../model/pokemons';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Pokemon} from "../model/pokemon";
import {LocalStorageService} from "angular-2-local-storage";

@Injectable()
export class PokemonService {
  private pokemonsUrl = 'http://pokeapi.co/api/v2/pokemon';  // URL to web API

  constructor (private http: Http, public localStorageService: LocalStorageService) {}

  getPokemons (): Observable<Pokemons[]> {
    return this.http.get(this.pokemonsUrl).map(response => response.json()).catch(this.handleError);
  }

  getPokemon (id: number): Promise<Pokemon> {
    let url ="http://pokeapi.co/api/v2/pokemon/"+id;
    return this.http.get(url).toPromise().then(response => response.json() as Pokemon).catch(this.handleError);
  }

  //noinspection JSMethodCanBeStatic
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  collectionToggle(pokemon: Pokemon) {
    let collection = this.getCollection();
    let index = this.getIndex(pokemon);

    if (index == -1) {
      collection.push(pokemon);
    }else {
      collection.splice(index, 1);
    }

    this.localStorageService.set("collection", collection);
  }

  getCollection() : any {
    let collection = this.localStorageService.get("collection");
    if (!collection) {
      return []
    }

    return collection;
  }

  getIndex(pokemon: Pokemon) {
    let collection = this.getCollection();
    let index = -1;
    for(let i = 0; i < collection.length; i++) {
      if (collection[i].id === pokemon.id) {
        index = i;
        break;
      }
    }

    return index;
  }

  getPokemonAbilities(pokemon: Pokemon) {
    let abilities = [];

    for(let ability of pokemon.abilities)  {
      abilities.push(ability.ability.name);
    }

    return abilities.join(", ");
  }

  getPokemonStats(pokemon: Pokemon) {
    let stats = [];

    for(let stat of pokemon.stats)  {
      stats.push(stat.stat.name+ "("+ stat.base_stat +" pts)");
    }

    return stats.join(", ");
  }

  getPokemonMoves(pokemon: Pokemon) {
    let moves = [];
    for (let move of pokemon.moves) {
      moves.push(move.move.name);
    }

    return moves.join(", ");
  }

  getPokemonTypes(pokemon: Pokemon) {
    let types = [];
    for (let type of pokemon.types) {
      types.push(type.type.name)
    }

    return types.join(", ");
  }

}
