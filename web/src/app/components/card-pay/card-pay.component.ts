import { Component, OnInit } from '@angular/core';
import { MarvelStorageService } from 'src/app/service/api/marvel/marvel-storage.service';

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
  price: any

  constructor(private apiMarvelStorageService: MarvelStorageService) { }

  ngOnInit(): void {
    this.priceId();
  }

  openModal(){
    console.log('abrir modal')
    this.openModalAction = true;
  }

  closeModal(){
    console.log('entrou')
    this.openModalAction = false;
  }

  priceId(){
    setTimeout(() => {
      this.price = this.apiMarvelStorageService.getPriceCharacter();
    }, 1000);
  }


  
}
