import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/pages/register/register.service';

@Component({
  selector: 'app-register-dice',
  templateUrl: './register-dice.component.html',
  styleUrls: [
    './register-dice.component.scss',
    '../../../../assets/styles/global.scss'
  ]
})
export class RegisterDiceComponent implements OnInit {

  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
  ) {}

  registerForm = this.formBuilder.group({
    nickName: ['', Validators.required],
    // firstName: ['', Validators.required],
    // lastName: ['', Validators.required],
    email: ['', Validators.required],
    contact: [null, Validators.required],
    check: ['', Validators.required],
    password: ['', Validators.required],
  });


  ngOnInit(): void {window.scrollTo(0, 0);}

  onSubmit() { this.handleData();}

  btnContinue() {
    this.handleData();
    // this.router.navigate(['register/payment']) 
  }

  handleData(){
    
    const setFormDice = {
      nickName: this.registerForm.get('nickName')?.value,
      // firstName: this.registerForm.get('firstName')?.value,
      // lastName: this.registerForm.get('lastName')?.value,
      email: this.registerForm.get('email')?.value,
      contact: this.registerForm.get('contact')?.value,
      check: this.registerForm.get('check')?.value,
      password: this.registerForm.get('password')?.value,
    }
     this.registerService.setDice(setFormDice);
     this.router.navigate(['/register/address']) 

    //criação de um número para ID
    // 

    // // pega todos os valores do input
    // const dice: Dice = this.registerForm.value

    // //

    // //
    
    // this.accessService.setData(this.dices);
    
  }

}
