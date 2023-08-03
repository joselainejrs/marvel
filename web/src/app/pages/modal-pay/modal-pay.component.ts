import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/service/pages/payment/payment.service';
import { RegisterService } from 'src/app/service/pages/register/register.service';

@Component({
  selector: 'app-modal-pay',
  templateUrl: './modal-pay.component.html',
  styleUrls: [
    './modal-pay.component.scss',
    '../../../assets/styles/global.scss'
  ]
})
export class ModalPayComponent implements OnInit {
  @Input() modalPay = true;
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
    cpf: ['', Validators.required],
  });

  ngOnInit(): void {}

  eventBtnModal() {
    this.openClosePay.emit();
  }

  onSubmit() { this.handleData(); }

  btnContinue() {
    this.handleData();
    this.paymentService.setDataPaymentNew();
  
  }

  handleData() {
    const setPaymentDice = {
      cardNumber: this.registerPaymentForm.get('cardNumber')?.value,
      validity: this.registerPaymentForm.get('validity')?.value,
      cvv: this.registerPaymentForm.get('cvv')?.value,
      cardholderName: this.registerPaymentForm.get('cardholderName')?.value,
      cpf: this.registerPaymentForm.get('cpf')?.value,
    }

    this.paymentService.setPayment(setPaymentDice);
    this.openClosePay.emit();
  }

}
