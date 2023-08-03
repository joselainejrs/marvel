import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/service/pages/payment/payment.service';
@Component({
  selector: 'app-modal-pay',
  templateUrl: './modal-pay.component.html',
  styleUrls: [
    './modal-pay.component.scss',
    '../../../assets/styles/global.scss'
  ]
})
export class ModalPayComponent implements OnInit {
  @Output() openClosePay = new EventEmitter()

  constructor(
    private formBuilder: FormBuilder,
    private paymentService: PaymentService,
  ) { }

  registerPaymentForm = this.formBuilder.group({
    cardNumber: ['', Validators.required],
    validity: ['', Validators.required],
    cvv: ['', Validators.required],
    cardholderName: ['', Validators.required],
    cpf: [null, Validators.required],
  });

  ngOnInit(): void {
  }

  eventBtnModal() {
    this.openClosePay.emit();
  }

  onSubmit() {
    this.handleData(); 
    this.paymentService.setDataPaymentNew();
  }

  handleData() {
    console.log('entrou no handleData')

    const setPaymentDice = {
      amount: "100.5",
      iframe: true,
      cardNumber: this.registerPaymentForm.get('cardNumber')?.value,
      validity: this.registerPaymentForm.get('validity')?.value,
      cvv: this.registerPaymentForm.get('cvv')?.value,
      cardholderName: this.registerPaymentForm.get('cardholderName')?.value,
      cpf: this.registerPaymentForm.get('cpf')?.value,
    }

    this.paymentService.setPayment(setPaymentDice);
  }

}
