import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/pages/register/register.service';

@Component({
  selector: 'app-modal-pay',
  templateUrl: './modal-pay.component.html',
  styleUrls: [
    './modal-pay.component.scss',
    '../../../../assets/styles/global.scss'
  ]
})
export class ModalPayComponent implements OnInit {
  @Output() openClosePay = new EventEmitter()

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
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

  eventBtnModal(){
    this.openClosePay.emit();
  }

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
    // this.router.navigate(['/register/address']);    
}

}
