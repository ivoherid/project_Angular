import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Elixirs } from '../interface/elixirs';


@Injectable({
  providedIn: 'root'
})
export class ElixirsService {
BASE_URL = 'https://wizard-world-api.herokuapp.com/Elixirs';
private http = inject(HttpClient)
//   constructor() { }
//   getElixirs(){
//     return this.http.get(this.BASE_URL);
//   }
  async getElixirs() : Promise<Elixirs[]>{
    const data = await fetch(this.BASE_URL);
    return await data.json() ?? [];
  }

  async getElixirsById(id : number) : Promise<Elixirs[] | undefined>{
    const data = await fetch(`${this.BASE_URL}/${id}`);
    return await data.json() ?? {};
  }
}
