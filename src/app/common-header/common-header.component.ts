import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
})
export class CommonHeaderComponent implements OnInit {
  cartCount: number = 0;
  path: string = '/';
  constructor(private cartService: CartService, private router: Router) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.path = event.url;
      });
  }

  ngOnInit(): void {
    this.cartService.getCartCount.subscribe((value: number) => {
      this.cartCount = value;
    });
  }
}
