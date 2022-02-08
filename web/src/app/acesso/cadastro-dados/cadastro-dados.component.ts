import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(
    private formBuilder: FormBuilder,
  ) { }

    dadosForm = this.formBuilder.group({
    nickName: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    contact: [null, Validators.required],
    password: ['', Validators.required],
  });


  ngOnInit(): void {

  }


  //Criando uma validação dos input com classe e su
  // validInput(input : FormControl){
  //   return input.value ? null : {obrigatorio : true}
  // }

  onSubmit() { }

  btnContinue() {
    console.log("oie")
  }

  // verifica(campo){
  //   // return !campo.valid && campo.touched;
  //   return !this.cdsDadosForm.get(campo)?.valid && this.cdsDadosForm.get(campo)?.touched
  // }

}
