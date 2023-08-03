import { Injectable } from '@angular/core';
import { IPayment } from 'src/app/interfaces/data';
import { MarvelStorageService } from '../../api/marvel/marvel-storage.service';
import { RegisterStorageService } from '../register/register-storage.service';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  payment: any = []
  cardNumber = '';
  validity = '';
  cvv = '';
  cardholderName = '';
  cpf = '';

  constructor(
    private apiMarvelStorageService: MarvelStorageService,
    private registerStorageService: RegisterStorageService
  ) { }

  setPayment(Dice: any) {
    this.cardNumber = Dice.cardNumber;
    this.validity = Dice.validity;
    this.cvv = Dice.cvv;
    this.cardholderName = Dice.cardholderName;
    this.cpf = Dice.cpf;
  }

  setDataPaymentNew() {
    if (localStorage.hasOwnProperty('dataPayment')) {
      this.payment = localStorage.getItem("dataPayment")
      JSON.parse(this.payment)
    }

    const paymentNew: IPayment = {
      // idData: this.registerStorageService.getIdUser(),
      cardNumber: this.cardNumber,
      validity: this.validity,
      cvv: this.cvv,
      cardholderName: this.cardholderName,
      cpf: this.cpf,
      price: this.apiMarvelStorageService.getPriceCharacter()
    };

    this.payment.push(paymentNew)
    console.log(this.payment);
    localStorage.setItem('dataPayment', JSON.stringify(this.payment));
  }

}
