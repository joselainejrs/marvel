import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AccessService } from 'src/app/access.service';
import { Profile } from '../interfaces/profile';


@Component({
  selector: 'app-register-address',
  templateUrl: './register-address.component.html',
  styleUrls: [
    './register-address.component.scss',
    '../access.component.scss'
  ]
})
export class RegisterAddressComponent implements OnInit {

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

    // console.log(this.registerAddressForm.controls['cep'].value);

    cep.replace(/\D/g, '');
    //Verifica se campo cep possui valor informado.
    if (cep !== '') {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        this.accessService.getCep(cep)?.subscribe(data => {
          this.dataform(data)
        });
      }
    }
    console.log(this.accessService.getCep(cep)?.subscribe(data => {
      this.dataform(data)
    }))
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

  btnContinue() {
    
    // this.profile.filter(cep => cep.cep = this.registerAddressForm.controls['cep'].value);
    // this.profile.filter(address => address.address = this.registerAddressForm.controls['address'].value);
    // this.profile.filter(no => no.no = this.registerAddressForm.controls['no'].value);
    // this.profile.filter(complement => complement.complement = this.registerAddressForm.controls['complement'].value);
    // this.profile.filter(district => district.district = this.registerAddressForm.controls['district'].value);
    // this.profile.filter(city => city.city = this.registerAddressForm.controls['city'].value);

   }
}
