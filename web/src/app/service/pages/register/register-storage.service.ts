import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterStorageService {
  idUser: string;

  constructor() { }


  setIdUser(id: string) {
    this.idUser = id
    console.log("id do usuario", id)
  }

  getIdUser(): string {
    return this.idUser;
  }
}
