import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvelStorageService {
  price: string;
  hqPurchased: {};
  
  constructor() { }

  setHqPurchased(hq: {}) {
    this.hqPurchased = hq;
  }

  getHqPurchased(): any {
    return this.price;    
  }

  setPriceCharacter(currency: string) {
    this.price = currency 
  }

  getPriceCharacter(): string {
    return this.price;    
  }
  
}
