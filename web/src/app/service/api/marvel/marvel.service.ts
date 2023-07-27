import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMarvelHQS } from 'src/app/interfaces/marvel';
import { environment } from 'src/environments/environment'; 


@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  publickKey = environment.publickKey;
  hash = environment.hash;
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  //metodo para conectar com a marvel
  //operador = mapp

  getCharacteres(): Observable<IMarvelHQS> {
    const params = `comics?ts=1&apikey=${this.publickKey}&hash=${this.hash}`;
    return this.http.get(this.baseUrl + params).pipe(map((data: any) => data.data.results))
  }

  getCharacteresId(id: number): Observable<IMarvelHQS> {
    const paramsId = `comics/${id}?ts=1&apikey=${this.publickKey}&hash=${this.hash}`;
    return this.http.get(this.baseUrl + paramsId).pipe(map((data: any) => data.data.results))
  }

}
