import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-course-items',
  templateUrl: './course-items.component.html',
  styleUrls: ['./course-items.component.scss'],
})
export class CourseItemsComponent implements OnInit {
  constructor(private cartService: CartService, private _snackBar: MatSnackBar) {}
  @Input() image: string = '';
  @Input() counter: number = 0;
  @Input() heading: string = '';
  @Input() description: string = '';
  @Input() cost: string = '';
  @Input() item: any = {}
  
  ngOnInit(): void {}


  addToCart(item:any)
  {
    this.cartService.addToCart(item);
    this.openSnackBar()
  }

  openSnackBar() {
    this._snackBar.open('Course added to cart !', 'Okay ', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 2 * 1000,
    });
  }
}
