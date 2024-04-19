import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonList } from '../models/pokemon-list'
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
@Injectable({providedIn: 'root'})
export class PokemonInfoService {
  constructor(private httpClient: HttpClient) { }
  url: string = 'https://pokeapi.co/api/v2/'

  getPokemonList(): Observable<PokemonList>{
    return this.httpClient.get<PokemonList>(`${this.url}pokemon/`)
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.url}pokemon/${id}`)
  }

}
