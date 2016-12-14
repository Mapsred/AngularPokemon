import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Pokemon }        from '../model/pokemon';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {
  private pokemonsUrl = 'http://pokeapi.co/api/v2/pokemon';  // URL to web API
  constructor (private http: Http) {}

  getPokemons (): Observable<Pokemon[]> {
    return this.http.get(this.pokemonsUrl)
      .map(result => result.json())
      .catch(this.handleError);
  }

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
