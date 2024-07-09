import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMarvelHQS } from 'src/app/interfaces/marvel';
import { environment } from 'src/environments/environment';
import { AccessService } from '../../pages/access/access.service';
import { AccessStorageService } from '../../pages/access/access-storage.service';


@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  publicKey = this.accessStorageService.getMarvelPublicKey();
  hash = this.accessStorageService.getMarvelHash();


  constructor(
    private http: HttpClient,
    private accessStorageService: AccessStorageService
  ) { }


  getCharacteres(): Observable<IMarvelHQS> {
    const params = `comics?ts=1&apikey=${this.publicKey}&hash=${this.hash}`;
    return this.http.get(environment.baseUrl + params).pipe(map((data: any) => data.data.results))
  }

  getCharacteresId(id: number): Observable<IMarvelHQS> {
    const paramsId = `comics/${id}?ts=1&apikey=${this.publicKey}&hash=${this.hash}`;
    return this.http.get(environment.baseUrl + paramsId).pipe(map((data: any) => data.data.results))
  }

}
