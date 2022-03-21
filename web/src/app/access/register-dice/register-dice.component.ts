import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-dice',
  templateUrl: './register-dice.component.html',
  styleUrls: [
    './register-dice.component.scss',
    '../access.component.scss'
  ]
})
export class RegisterDiceComponent implements OnInit {

  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  registerForm = this.formBuilder.group({
    nickName: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    contact: [null, Validators.required],
    check: ['', Validators.required],
    password: ['', Validators.required],
  });


  ngOnInit(): void { }

  onSubmit() { }

  btnContinue() {
    this.router.navigate(['rPayment'])
  }

}
