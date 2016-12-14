/**
 * Created by maps_red on 07/12/16.
 */
import {Injectable} from '@angular/core'
import {Http} from "@angular/http"

@Injectable()
export class AppService {

  constructor(protected http: Http) {}

  public getPokemons(): any {
    return this.http.get('http://pokeapi.com/api/v2/pokemon/i')
  }
}
