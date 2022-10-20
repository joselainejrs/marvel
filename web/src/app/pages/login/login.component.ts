import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    '../../../assets/styles/form.scss'
  ]
})
export class LoginComponent implements OnInit {

  hide = true;
  
  loginForm = this.formBuilder.group({
    nickname: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void { }

  onSubmit() { }

  btnLogin() { }

   // get e() { return this.loginForm.controls['nickname'].value }

  get nickname() { return this.loginForm.get('nickname'); }

}
