import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService) { }
  items:any  = [];
  totalCost: number = 0;
  ngOnInit(): void {
    this.updateList();
  }

  updateList() {
    this.items = this.cartService.getCartItems();
    this.getTotalCost();
  }

  delete(index: number) {
    this.cartService.deleteItem(index);
    this.updateList();
  }

  getTotalCost() {
    this.totalCost = this.cartService.getTotalCost()
  }
}
