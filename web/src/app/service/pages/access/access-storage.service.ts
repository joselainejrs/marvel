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

  getPublicKey(): string {
    this.publicKey =  JSON.parse(localStorage.getItem('marvelPublicKey') || '{}')
    return this.publicKey;
  }

  setPublicKey(publicKey: string): void {
    this.publicKey = publicKey
    localStorage.setItem('marvelPublicKey', JSON.stringify(this.publicKey));
  }

  getHash(): string {
    this.hash =  JSON.parse(localStorage.getItem('MarvelHash') || '{}')
    return this.hash;
  }

  setHash(hash: string): void {
    this.hash = hash
    localStorage.setItem('MarvelHash', JSON.stringify(this.hash));
  }

}
