import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ingredients } from '../interface/elixirs';

const BASE_URL = 'https://wizard-world-api.herokuapp.com/Spells';
@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
private http = inject(HttpClient)
  constructor() { }
  // getIngredients(){
  //   return this.http.get(BASE_URL);
  // }

  async getIngredients() : Promise<ingredients>{
    const data = await fetch(BASE_URL);
    return await data.json() ?? [];
  }
}
