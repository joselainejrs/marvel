import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guid } from 'guid-typescript';


@Injectable({
  providedIn: 'root'
})

export class AccessService implements OnInit {
  
  // diceNew: Dice[];
  profiles: any = [];

  // Dice
  id: any;
  nickName = '';
  firstName = '';
  lastName = '';
  email = '';
  contact = '';
  check = '';
  cardNumber = '';
  validity = '';
  cvv = '';
  cardholderName = '';
  cpf = '';
  password = '';
  cep = '';
  address = '';
  no = '';
  complement = '';
  district = '';
  city = '';

  // marvelUrl = "http://gateway.marvel.com";
  // comicBook!: ComicBook;
  // perfilLogado!: Dice;

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    // this.profiles = JSON.parse(localStorage.getItem('profiles'));
  }

  getCep(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json`);
  }

  //set da dices
  setDice(Dice: any) {

    this.nickName = Dice.nickName;
    this.firstName = Dice.firstName;
    this.lastName = Dice.lastName;
    this.email = Dice.email;
    this.contact = Dice.contact;
    this.check = Dice.check;
    this.password = Dice.password;

  }

  setPayment(Dice: any) {
    this.cardNumber = Dice.cardNumber;
    this.validity = Dice.validity;
    this.cvv = Dice.cvv;
    this.cardholderName = Dice.cardholderName;
    this.cpf = Dice.cpf;
  }

  // 
  setAddress(Dice: any) {

    this.cep = Dice.cep;
    this.address = Dice.address;
    this.no = Dice.no;
    this.complement = Dice.complement;
    this.district = Dice.district;
    this.city = Dice.city;
  }

  setDataNew() {
    const profileNew = {
      id: this.id = Guid.create().toString(),
      nickName: this.nickName,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      contact: this.contact,
      check: this.check,
      password: this.password,
      cardNumber: this.cardNumber,
      validity: this.validity,
      cvv: this.cvv,
      cardholderName: this.cardholderName,
      cpf: this.cpf,
      cep: this.cep,
      address: this.address,
      no: this.no,
      complement: this.complement,
      district: this.district,
      city: this.city
    };

      this.profiles.push(profileNew)
      console.log(this.profiles);
      localStorage.setItem('profiles', JSON.stringify(this.profiles));
  }

}
