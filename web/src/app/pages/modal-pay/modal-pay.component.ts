import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  eventBtnModal() {
    this.openClosePay.emit();
  }

  onSubmit() { this.handleData(); }

  btnContinue() {
    this.handleData();
    // this.router.navigate(['register/address']) 
  }

  handleData() {
    const setPaymentDice = {
      amount: "100.5",
      iframe: true,
      cardNumber: this.registerPaymentForm.get('cardNumber')?.value,
      validity: this.registerPaymentForm.get('validity')?.value,
      cvv: this.registerPaymentForm.get('cvv')?.value,
      cardholderName: this.registerPaymentForm.get('cardholderName')?.value,
      cpf: this.registerPaymentForm.get('cpf')?.value,
    }

    // this.registerService.setPayment(setPaymentDice);
    // this.router.navigate(['/register/address']);


    // const cardForm = mp.cardForm({
    //   amount: "100.5",
    //   iframe: true,
    //   form: {
    //     id: "form-checkout",
    //     cardNumber: {
    //       id: "form-checkout__cardNumber",
    //       placeholder: "Número do cartão",
    //     },
    //     expirationDate: {
    //       id: "form-checkout__expirationDate",
    //       placeholder: "MM/YY",
    //     },
    //     securityCode: {
    //       id: "form-checkout__securityCode",
    //       placeholder: "Código de segurança",
    //     },
    //     cardholderName: {
    //       id: "form-checkout__cardholderName",
    //       placeholder: "Titular do cartão",
    //     },
    //     issuer: {
    //       id: "form-checkout__issuer",
    //       placeholder: "Banco emissor",
    //     },
    //     installments: {
    //       id: "form-checkout__installments",
    //       placeholder: "Parcelas",
    //     },
    //     identificationType: {
    //       id: "form-checkout__identificationType",
    //       placeholder: "Tipo de documento",
    //     },
    //     identificationNumber: {
    //       id: "form-checkout__identificationNumber",
    //       placeholder: "Número do documento",
    //     },
    //     cardholderEmail: {
    //       id: "form-checkout__cardholderEmail",
    //       placeholder: "E-mail",
    //     },
    //   },
    //   callbacks: {
    //     onFormMounted: error => {
    //       if (error) return console.warn("Form Mounted handling error: ", error);
    //       console.log("Form mounted");
    //     },
    //     onSubmit: event => {
    //       event.preventDefault();

    //       const {
    //         paymentMethodId: payment_method_id,
    //         issuerId: issuer_id,
    //         cardholderEmail: email,
    //         amount,
    //         token,
    //         installments,
    //         identificationNumber,
    //         identificationType,
    //       } = cardForm.getCardFormData();

    //       fetch("/process_payment", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           token,
    //           issuer_id,
    //           payment_method_id,
    //           transaction_amount: Number(amount),
    //           installments: Number(installments),
    //           description: "Descrição do produto",
    //           payer: {
    //             email,
    //             identification: {
    //               type: identificationType,
    //               number: identificationNumber,
    //             },
    //           },
    //         }),
    //       });
    //     },
    //     onFetching: (resource) => {
    //       console.log("Fetching resource: ", resource);

    //       // Animate progress bar
    //       const progressBar = document.querySelector(".progress-bar");
    //       progressBar.removeAttribute("value");

    //       return () => {
    //         progressBar.setAttribute("value", "0");
    //       };
    //     }
    //   },
    // });

  }

}
