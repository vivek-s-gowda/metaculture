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
  posterSize = ['18" X 24"', '24" X 36"'];
  selectedSize = '18" X 24"';
  selectedType = 'Semi-gloss';
  posterTypes = ['Semi-gloss','Premium matte','Premium gloss','Mounted']
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  constructor(private cartService: CartService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addToCart(item:any) {
    item.date = Date.now()
    item.type = 'POSTER';
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

  onTypeSizeChange() {
    if(this.selectedSize == '18" X 24"')
    {
      switch(this.selectedType){
        case 'Semi-gloss': {
          this.cost = '40';
          break;
        }
        case 'Premium matte': {
          this.cost = '60';
          break;
        }
        case 'Premium gloss': {
          this.cost = '60';
          break;
        }
        case 'Mounted': {
          this.cost = '80';
          break;
        }
      }
    }
    else {
      switch(this.selectedType){
        case 'Semi-gloss': {
          this.cost = '60';
          break;
        }
        case 'Premium matte': {
          this.cost = '80';
          break;
        }
        case 'Premium gloss': {
          this.cost = '80';
          break;
        }
        case 'Mounted': {
          this.cost = '100';
          break;
        }
      }
    }
  }

  getCost() {
    this.item.cost = this.cost;
    return this.cost;
  }

}
