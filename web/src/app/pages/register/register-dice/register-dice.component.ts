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
    email: ['', Validators.required],
    contact: [null, Validators.required],
    check: [false],
    password: ['', Validators.required],
  });

  ngOnInit(): void {window.scrollTo(0, 0);}

  onSubmit() { this.handleData();}

  handleData(){
    
    const setFormDice = {
      nickName: this.registerForm.get('nickName')?.value,
      email: this.registerForm.get('email')?.value,
      contact: this.registerForm.get('contact')?.value,
      check: this.registerForm.get('check')?.value,
      password: this.registerForm.get('password')?.value,
    }
     this.registerService.setDataNew(setFormDice);
     this.router.navigate(['/register/address']);    
  }

}
