import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

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
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  constructor(private cartService: CartService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addToCart(item:any) {
    this.cartService.addToCart(item)
    this.openSnackBar()
  }

  openSnackBar() {
    this._snackBar.open('Poster Added to Cart !..', 'Okay ', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2 * 1000,
    });
  }

}
