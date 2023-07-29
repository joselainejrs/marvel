import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvelStorageService {
  price: any;
  
  constructor() { }

  setPriceCharacter(currency: any) {
    this.price = currency 
  }

  getPriceCharacter(): any {
    return this.price;    
  }
}
