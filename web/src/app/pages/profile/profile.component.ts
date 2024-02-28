import { Component, OnInit } from '@angular/core';
import { IDice } from 'src/app/interfaces/data';
import { AccessService } from 'src/app/service/pages/access/access.service';
// import { Component, OnInit } from '../../../assets/styles/global.css';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [
    './profile.component.scss',
    '../../../assets/styles/global.scss'
  ]
})
export class ProfileComponent implements OnInit {
  profiles: IDice;

  constructor(
    private accessService: AccessService
  ) { }

  ngOnInit(): void { this.userLogged() }

  userLogged() {
    let getUserData = JSON.parse(localStorage.getItem('profiles') || '');

    let nickname: string = this.accessService.getNickname()
    getUserData.forEach((element: IDice) => {
      if (element.nickName == nickname) {
        this.profiles = element
        console.log(this.profiles)
      }
    });
  }

}
