import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Spells } from '../interface/spells';

const BASE_URL = 'https://wizard-world-api.herokuapp.com/Spells';
@Injectable({
  providedIn: 'root'
})
export class SpellsService {
private http = inject(HttpClient)
  constructor() { }
  // getSpells(){
  //   return this.http.get(BASE_URL);
  // }

  async getSpells():Promise<Spells[]>{
    const data = await fetch(BASE_URL);
    return await data.json() ?? [];
  }
}
