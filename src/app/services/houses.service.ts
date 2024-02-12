import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Houses } from '../interface/houses';


@Injectable({
  providedIn: 'root'
})
export class HousesService {
BASE_URL = 'https://wizard-world-api.herokuapp.com/Houses';

private http = inject(HttpClient)
  constructor() { }
  // getHouses(){
  //   return this.http.get(BASE_URL);
  // }
  async getHouses(): Promise<Houses[]>{
    const data = await fetch(this.BASE_URL);
    return await data.json() ?? [];
  }
}
