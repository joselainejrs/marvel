import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccessStorageService } from 'src/app/service/pages/access/access-storage.service';
import { AccessService } from 'src/app/service/pages/access/access.service';

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
    private router: Router,
    private formBuilder: FormBuilder,
    private accessService: AccessService,
    private accessStorageService: AccessStorageService
  ) { }

  get nickname() { return this.loginForm.get('nickname')?.value; }
  get password() { return this.loginForm.get('password')?.value; }


  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.leadMarvelkey()
  }

  leadMarvelkey(): void {
    this.accessService.getMarvelKeyAccess().subscribe({
      next: (data) => {
        console.log(data)
        this.accessStorageService.setPublicKey(data.public_key);
        this.accessStorageService.setHash(data.hash);
      },
      error: (error) => {
        console.log('O acesso a Key é restrito', error)
      }
    })
  }

  onSubmit() {
    let getUserData = JSON.parse(localStorage.getItem('profiles') || '');

    getUserData.forEach((element: any) => {
      if (element.nickName == this.nickname && element.password == this.password) {
        this.accessStorageService.setUserId(element.id);
        this.router.navigate(['/comic/hqlist']);
      } else {
        console.log('entrou')
        this.textNotification = true
      }
    });

  }

  btnLogin() { }

}
