import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/pages/register/register.service';

@Component({
  selector: 'app-register-address',
  templateUrl: './register-address.component.html',
  styleUrls: [
    './register-address.component.scss',
    '../../../../assets/styles/global.scss'
  ]
})
export class RegisterAddressComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) { }

  registerAddressForm = this.formBuilder.group({
    cep: ['', Validators.required],
    address: ['', Validators.required],
    no: ['', Validators.required],
    complement: [''],
    district: [null, Validators.required],
    city: [null, Validators.required],
  });

  ngOnInit(): void { window.scrollTo(0, 0); }

  onSubmit(): void {
    this.handleData();
  }

  valueCep() {
    const cep: any = this.registerAddressForm.controls['cep'].value;

    cep.replace(/\D/g, '');
    //Verifica se campo cep possui valor informado.
    if (cep !== '') {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        this.registerService.getCep(cep)?.subscribe(data => {
          this.dataform(data)
        });
      }
    }
    console.log(this.registerService.getCep(cep)?.subscribe(data => {
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

  handleData() {
    const setFormAddress = {
      cep: this.registerAddressForm.get('cep')?.value,
      address: this.registerAddressForm.get('address')?.value,
      no: this.registerAddressForm.get('no')?.value,
      complement: this.registerAddressForm.get('complement')?.value,
      district: this.registerAddressForm.get('district')?.value,
      city: this.registerAddressForm.get('city')?.value,
    }
    this.registerService.setDataNew(setFormAddress);
    this.router.navigate(['login']);
  }
}
