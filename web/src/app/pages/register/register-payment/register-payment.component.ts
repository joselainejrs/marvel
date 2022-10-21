import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Dice } from 'src/app/interfaces/dices';
import { RegisterService } from 'src/app/service/register/register.service';

@Component({
  selector: 'app-register-payment',
  templateUrl: './register-payment.component.html',
  styleUrls: [
    './register-payment.component.scss',
    '../../../../assets/styles/form.scss'
  ]
})
export class RegisterPaymentComponent implements OnInit {

  dices: Dice[];

  constructor( 
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
    ) { this.dices = [];}

  registerPaymentForm = this.formBuilder.group({
    cardNumber: ['', Validators.required],
    validity: ['', Validators.required],
    cvv: ['', Validators.required],
    cardholderName: ['', Validators.required],
    cpf: [null, Validators.required],
  });

  ngOnInit(): void { }

  onSubmit(){this.handleData();}

  btnContinue(){
    this.handleData();
    // this.router.navigate(['register/address']) 
  }

  handleData(){
      const setPaymentDice = {
        cardNumber: this.registerPaymentForm.get('cardNumber')?.value,
        validity: this.registerPaymentForm.get('validity')?.value,
        cvv: this.registerPaymentForm.get('cvv')?.value,
        cardholderName: this.registerPaymentForm.get('cardholderName')?.value,
        cpf: this.registerPaymentForm.get('cpf')?.value,
      }

      // this.registerService.setPayment(setPaymentDice);
      this.router.navigate(['/register/address']);    
  }

}
