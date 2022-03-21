import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-address',
  templateUrl: './register-address.component.html',
  styleUrls: [
    './register-address.component.scss',
    '../access.component.scss'
  ]
})
export class RegisterAddressComponent implements OnInit {

  constructor( private formBuilder: FormBuilder) { }

  registerAddressForm = this.formBuilder.group({
    cep: ['', Validators.required],
    address: ['', Validators.required],
    no: ['', Validators.required],
    complement: ['', Validators.required],
    district: [null, Validators.required],
    city: [null, Validators.required],
  });

  ngOnInit(): void {
  }

  onSubmit(){}

  btnContinue(){}

  

}
