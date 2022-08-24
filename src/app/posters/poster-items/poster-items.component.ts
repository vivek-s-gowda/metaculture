import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-poster-items',
  templateUrl: './poster-items.component.html',
  styleUrls: ['./poster-items.component.scss']
})
export class PosterItemsComponent implements OnInit {

  @Input() shortline: string = '';
  @Input() image: string = '';
  @Input() cost: string = '';
  @Input() item: any = {};
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(item:any) {
    this.cartService.addToCart(item)
  }

}
