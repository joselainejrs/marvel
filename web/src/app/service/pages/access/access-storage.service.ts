import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AccessStorageService {
  private id: string;
  private password: string;

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

}
