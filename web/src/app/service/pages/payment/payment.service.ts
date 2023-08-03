import { Injectable } from '@angular/core';
import { IPayment } from 'src/app/interfaces/data';
import { MarvelStorageService } from '../../api/marvel/marvel-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  payment: any = [];
  cardNumber = '';
  validity = '';
  cvv = '';
  cardholderName = '';
  cpf = '';

  constructor(
    private apiMarvelStorageService: MarvelStorageService,
  ) { }

  setPayment(Dice: any) {
    this.cardNumber = Dice.cardNumber;
    this.validity = Dice.validity;
    this.cvv = Dice.cvv;
    this.cardholderName = Dice.cardholderName;
    this.cpf = Dice.cpf;
  }

  setDataPaymentNew() {
    // console.log('set')
    // if (localStorage.hasOwnProperty('dataPayment')) {
    //   this.payment = localStorage.getItem("dataPayment");
    //   JSON.parse(this.payment);
    // }

    const paymentNew: IPayment = {
      cvv: this.cvv,
      cpf: this.cpf,
      validity: this.validity,
      cardNumber: this.cardNumber,
      cardholderName: this.cardholderName,
      price: this.apiMarvelStorageService.getPriceCharacter()
    }

    this.payment.push(paymentNew)
    localStorage.setItem('dataPayment', JSON.stringify(this.payment));
  }

}
