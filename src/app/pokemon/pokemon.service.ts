import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Pokemons }        from '../model/pokemons';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Pokemon} from "../model/pokemon";

@Injectable()
export class PokemonService {
  private pokemonsUrl = 'http://pokeapi.co/api/v2/pokemon';  // URL to web API

  constructor (private http: Http) {}

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
}
