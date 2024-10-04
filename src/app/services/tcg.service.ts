import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const API_URL = 'https://api.pokemontcg.io/v2/';

@Injectable({
  providedIn: 'root'
})
export class TcgService {

  private _http = inject(HttpClient);
  constructor() { }

  getCards() {
    return this._http.get(`${API_URL}cards?pageSize=80`);
  }

  getTypes() {
    return this._http.get(`${API_URL}types`);
  }
}