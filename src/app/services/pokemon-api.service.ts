import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(private _http:HttpClient) { }
  
  //pokedata

  getPokemon(limit: number, offset:number) {
    return this._http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  }

  //colect pokemon details
  getPokeData(name:string){
    return this._http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}
