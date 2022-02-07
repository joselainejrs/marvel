import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-dados',
  templateUrl: './cadastro-dados.component.html',
  styleUrls: [
    './cadastro-dados.component.scss',
    '../acesso.component.scss'
  ]
})
export class CadastroDadosComponent implements OnInit {

  hide = true;

  cdsDadosForm = this.formBuilder.group({
    nickName: [null, Validators.required],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.required],
    contact: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){}
}
