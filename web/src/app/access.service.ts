import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor(
    private http: HttpClient,
  ) {   }

  getCep(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json`);
  }

  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // get(key: string): any{
  //   return JSON.parse(this.storage.getItem(key));
  // }

}
