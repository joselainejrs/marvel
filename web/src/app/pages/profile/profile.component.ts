import { Component, OnInit } from '@angular/core';
import { IDice } from 'src/app/interfaces/data';
import { AccessStorageService } from 'src/app/service/pages/access/access-storage.service';
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
    private accessStorageService: AccessStorageService
  ) { }

  ngOnInit(): void { 
    this.userLogged(); 
    this.userPayment(); 
  }

  userLogged() {
    let getUserData = JSON.parse(localStorage.getItem('profiles') || '');

    let id: string = this.accessStorageService.getUserId();
    getUserData.forEach((element: IDice) => {
      if (element.id == id) {
        this.profiles = element
        console.log(this.profiles)
      }
    });
  }

  userPayment(){
    let getUserPayment = JSON.parse(localStorage.getItem('dataPayment') || '');
    console.log(getUserPayment)
  }

}
