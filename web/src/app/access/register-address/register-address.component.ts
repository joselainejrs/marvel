import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AccessService } from 'src/app/access.service';
import { States } from '../interfaces/states';


@Component({
  selector: 'app-register-address',
  templateUrl: './register-address.component.html',
  styleUrls: [
    './register-address.component.scss',
    '../access.component.scss'
  ]
})
export class RegisterAddressComponent implements OnInit {

  // states: States[];

  constructor(
    private formBuilder: FormBuilder,
    private accessService: AccessService) { }

  registerAddressForm = this.formBuilder.group({
    cep: ['', Validators.required],
    address: ['', Validators.required],
    no: ['', Validators.required],
    complement: ['', Validators.required],
    district: [null, Validators.required],
    city: [null, Validators.required],
  });

  ngOnInit(): void { }

  onSubmit() {
    console.log(this.registerAddressForm.controls);
  }

  valueCep() {
    const cep: any = this.registerAddressForm.controls['cep'].value;

    if (cep != null && cep !== '') {
      this.accessService.getCep(cep)?.subscribe(data => {
        return this.dataform(data)
        console.log(data)
      });
    }

    console.log(this.accessService.getCep(cep));
  }

  dataform(data: any): void {
    this.registerAddressForm.patchValue({
      cep: data.cep,
      address: data.logradouro,
      no: '',
      complement: data.complemento,
      district: data.bairro,
      city: data.localidade,
    })

  }

  btnContinue() { }



}
