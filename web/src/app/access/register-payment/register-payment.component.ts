import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-payment',
  templateUrl: './register-payment.component.html',
  styleUrls: [
    './register-payment.component.scss',
    '../access.component.scss'
  ]
})
export class RegisterPaymentComponent implements OnInit {

  constructor( private formBuilder: FormBuilder) { }

  registerPaymentForm = this.formBuilder.group({
    cardNumber: ['', Validators.required],
    validity: ['', Validators.required],
    cvv: ['', Validators.required],
    cardholderName: ['', Validators.required],
    cpf: [null, Validators.required],
  });

  ngOnInit(): void {
  }

  onSubmit(){}

  btnContinue(){}
}
