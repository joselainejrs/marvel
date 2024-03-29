import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { IDice } from 'src/app/interfaces/data';
import { RegisterStorageService } from './register-storage.service';


@Injectable({
  providedIn: 'root'
})
export class RegisterService implements OnInit {
  profiles: any = [];
  id: any;
  // nickName = '';
  // firstName = '';
  // lastName = '';
  // email = '';
  // contact = '';
  // check = '';
  // password = '';
  // cep = '';
  // address = '';
  // no = '';
  // complement = '';
  // district = '';
  // city = '';

  constructor(
    private http: HttpClient,
    private registerStorageService: RegisterStorageService
  ) { }

  ngOnInit(): void { }

  getCep(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json`);
  }

  // setDice(Dice: any) {
  //   this.nickName = Dice.nickName;
  //   this.email = Dice.email;
  //   this.contact = Dice.contact;
  //   this.check = Dice.check;
  //   this.password = Dice.password;
  // }

  // setAddress(Dice: any) {
  //   this.cep = Dice.cep;
  //   this.address = Dice.address;
  //   this.no = Dice.no;
  //   this.complement = Dice.complement;
  //   this.district = Dice.district;
  //   this.city = Dice.city;
  // }

  setDataNew(Dice: any) {
    if (localStorage.hasOwnProperty('profile')) {
      this.profiles = localStorage.getItem("profile");
      JSON.parse(this.profiles);
    }

    const profileNew: IDice = {
      id: this.id = Guid.create().toString(),
      nickName: Dice.nickName,
      email: Dice.email,
      contact: Dice.contact,
      check: Dice.check,
      password: Dice.password,
      cep: Dice.cep,
      address: Dice.address,
      no: Dice.no,
      complement: Dice.complement,
      district: Dice.district,
      city: Dice.city
    };

    this.profiles.push(profileNew)
    localStorage.setItem('profiles', JSON.stringify(this.profiles));
  }

}
