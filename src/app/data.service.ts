import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public cartItems: any = [];
  public getCartCount: Subject<number> = new Subject();
  private dbPath = '/metaculture';

  user!: AngularFireList<any>;

  constructor(
    private fireBase: AngularFireDatabase,) {
    if(localStorage.getItem('cartitems'))
      this.cartItems = JSON.parse(localStorage.getItem('cartitems') as string);


    this.user = fireBase.list(this.dbPath);
  }

  getData(): Observable<any> {
    return this.user.valueChanges();
  }

  addData(id: string, data: any): any {
    return this.user.set(id, data);
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
