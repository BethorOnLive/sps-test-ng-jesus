import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

  constructor(private _httpClient: HttpClient) { }
  private url = 'https://fakestoreapi.com/products?limit=9';


  getProducts(){
    return this._httpClient.get<any>(this.url);
  }
}
