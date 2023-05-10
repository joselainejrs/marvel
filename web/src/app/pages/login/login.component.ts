import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router,

  ) { }

  get nickname() { return this.loginForm.get('nickname')?.value; }
  get password() { return this.loginForm.get('password')?.value; }


  ngOnInit(): void { window.scrollTo(0, 0);}

  onSubmit() {
    let getUserData = JSON.parse(localStorage.getItem('profiles') || '');
    console.log(this.nickname);
    console.log(this.password);

    getUserData.forEach((element: { nickName: string | null; password: string | null; }) => {
      if (element.nickName == this.nickname && element.password == this.password) {
        this.router.navigate(['/comic/hqlist']);
      }
    });

  }

  btnLogin() { }

}
