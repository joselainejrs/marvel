import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    '../acesso.component.scss'
  ]
})
export class LoginComponent implements OnInit {

  hide = true;

  loginForm = this.formBuilder.group({
    nickname: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
  }
}
