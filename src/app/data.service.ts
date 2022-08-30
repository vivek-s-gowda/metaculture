import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public cartItems: any = [];
  public getCartCount: Subject<number> = new Subject();
  constructor() {
    if(localStorage.getItem('cartitems'))
      this.cartItems = JSON.parse(localStorage.getItem('cartitems') as string);
  }

  addToCart(item: any) {
    this.cartItems.push(item);
    this.updateLocalStorage();
    return this.cartItems;
  }

  getCartItems() {
    this.updateLocalStorage();
    return this.cartItems;
  }

  deleteItem(index: number) {
    this.cartItems.splice(index, 1);
    this.updateLocalStorage();
    return this.cartItems;
  }

  updateLocalStorage() {
    localStorage.setItem('cartitems', JSON.stringify(this.cartItems));
    this.cartItems = JSON.parse(localStorage.getItem('cartitems') as string);
    this.updateCartCount();
  }

  getTotalCost() {
    let sum = 0;
    this.cartItems.forEach((values: any) => {
      sum = sum + parseInt(values.cost);
    });
    return sum;
  }

  updateCartCount() {
    this.getCartCount.next(this.cartItems.length);
  }
}
