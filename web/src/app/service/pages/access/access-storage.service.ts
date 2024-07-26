import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AccessStorageService {
  private id: string;
  private hash: string;
  private password: string;
  private publicKey: string;

  constructor() { }

  getUserId(): string {
    this.id =  JSON.parse(localStorage.getItem('userLogged') || '{}')
    return this.id;
  }

  setUserId(id: string): void {
    this.id = id;
    localStorage.setItem('userLogged', JSON.stringify(this.id));
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  getMarvelPublicKey(): string {
    this.publicKey =  JSON.parse(localStorage.getItem('marvelPublicKey') || '{}')
    return this.publicKey;
  }

  setMarvelPublicKey(publicKey: string): void {
    this.publicKey = publicKey
    localStorage.setItem('marvelPublicKey', JSON.stringify(this.publicKey));
  }

  getMarvelHash(): string {
    this.hash =  JSON.parse(localStorage.getItem('marvelHash') || '{}')
    return this.hash;
  }

  setMarvelHash(hash: string): void {
    this.hash = hash
    localStorage.setItem('marvelHash', JSON.stringify(this.hash));
  }

}
