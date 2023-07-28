import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-pay',
  templateUrl: './card-pay.component.html',
  styleUrls: [
    './card-pay.component.scss',
    '../../../assets/styles/global.scss'
  ]
})

export class CardPayComponent implements OnInit {
  openModalAction: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('oie')
  }

  openModal(){
    console.log('abrir modal')
    this.openModalAction = true;
  }

  closeModal(){
    console.log('entrou')
    this.openModalAction = false;
  }

  
}
