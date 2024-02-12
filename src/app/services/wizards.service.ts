import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Wizards } from '../interface/wizards';

const BASE_URL = 'https://wizard-world-api.herokuapp.com/Wizards';
@Injectable({
  providedIn: 'root'
})
export class WizardsService {
private http = inject(HttpClient)
  constructor() { }
  // getWizards(){
  //   return this.http.get(BASE_URL);
  // }

  async getWizards():Promise<Wizards[]> {
    const data = await fetch(BASE_URL);
    return await data.json() ?? [];
  }
}
