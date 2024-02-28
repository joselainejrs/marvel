import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AccessService {
  private nickname: string;
  private password: string;

  constructor() { }

  getNickname(): string {
    this.nickname =  JSON.parse(localStorage.getItem('userLogged') || '{}')
    return this.nickname;
  }

  setNickname(nickname: string): void {
    this.nickname = nickname;
    localStorage.setItem('userLogged', JSON.stringify(this.nickname));
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(password: string): void {
    this.password = password;
  }

}
