import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AccessService } from 'src/app/access/access.service';

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
    private accessService: AccessService,
    private router: Router
    ) {}

  registerAddressForm = this.formBuilder.group({
      id: [''],
      cep: ['', Validators.required,],
      address: ['', Validators.required],
      no: ['', Validators.required],
      complement: ['', Validators.required],
      district: [null, Validators.required],
      city: [null, Validators.required],
  });

  ngOnInit(): void {}

  onSubmit(): void {
    // console.log(this.registerAddressForm.controls);
    // this.handleData();
  }

  valueCep() {
    const cep: any = this.registerAddressForm.controls['cep'].value;

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
    this.handleData();
    this.accessService.setDataNew();
  }

  handleData(){
    const setFormAddress = {
      cep: this.registerAddressForm.get('cep')?.value,
      address: this.registerAddressForm.get('address')?.value,
      no: this.registerAddressForm.get('no')?.value,
      complement: this.registerAddressForm.get('complement')?.value,
      district: this.registerAddressForm.get('district')?.value,
      city: this.registerAddressForm.get('city')?.value,
    }
     this.accessService.setAddress(setFormAddress);
     this.router.navigate(['login']);
  }
}
