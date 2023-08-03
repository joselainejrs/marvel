import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    '../../../assets/styles/global.scss'
  ]
})
export class LoginComponent implements OnInit {
  hide = true;
  textNotification = false;

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

    getUserData.forEach((element: { nickName: string | null; password: string | null; }) => {
      if (element.nickName == this.nickname && element.password == this.password) {
        this.router.navigate(['/comic/hqlist']);
      }else{
        console.log('entrou')
        this.textNotification = true
      }
    });

  }

  btnLogin() { }

}
