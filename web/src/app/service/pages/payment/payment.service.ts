import { Injectable } from '@angular/core';
import { IPayment } from 'src/app/interfaces/data';
import { MarvelStorageService } from '../../api/marvel/marvel-storage.service';
import { AccessService } from '../access/access.service';
import { AccessStorageService } from '../access/access-storage.service';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {
  payment: any = [];

  constructor(
    private accessStorageService: AccessStorageService,
    private apiMarvelStorageService: MarvelStorageService
  ) { }

  setDataPaymentNew(Dice: any) {
    const paymentNew: IPayment = {
      cvv: Dice.cvv,
      cpf: Dice.cpf,
      validity: Dice.validity,
      cardNumber: Dice.cardNumber,
      cardholderName: Dice.cardholderName,
      idUser: this.accessStorageService.getUserId(),
      price: this.apiMarvelStorageService.getPriceCharacter()
    }

    this.payment.push(paymentNew)
    // antes de concluir o sucesso do pagamento precisa pega os dados da compra da hq
    localStorage.setItem('dataPayment', JSON.stringify(this.payment));
  }

}
