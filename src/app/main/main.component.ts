import { Component, OnInit } from '@angular/core';

import { PokemonApiService } from '../services/pokemon-api.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _services:PokemonApiService) { }

  //initialize pages for pagination
  page = 1;
  maxPokemon!: number;

  //fetch data
  PokeBall:any = [];

  ngOnInit(): void {
    this.pokeCollect();
  }

  //collectPokes

  pokeCollect(){
    this._services.getPokemon(12, this.page + 0)
    .subscribe((res: any)=> {
      this.maxPokemon = res.count;
      res.results.forEach((result:any) => {
        this._services.getPokeData(result.name)
        .subscribe((res:any) => {
          this.PokeBall.push(res);
          console.log(this.PokeBall)
        })
      });
    });

  }

}
