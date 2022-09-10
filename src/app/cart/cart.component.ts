import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../cart.service';
import {
  StripeService,
  StripePaymentElementComponent,
  StripeCardComponent,
} from 'ngx-stripe';
import {
  StripeElementsOptions,
  PaymentIntent,
  StripeCardElementOptions,
} from '@stripe/stripe-js';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  // @ViewChild(StripeCardComponent) card!: StripeCardComponent;

  @ViewChild(StripePaymentElementComponent)
  paymentElement!: StripePaymentElementComponent;

  constructor(
    private cartService: CartService,
    private http: HttpClient,
    private fb: FormBuilder,
    private stripeService: StripeService,
    private dataService: DataService,
    private _snackBar: MatSnackBar
  ) {}
  items: any = [];
  name: string = '';
  totalCost: number = 0;

  paymentElementForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    address: [''],
    zipcode: [''],
    city: [''],
    amount: [2500, [Validators.required, Validators.pattern(/d+/)]],
    items: [''],
    date:['']
  });

  elementsOptions: StripeElementsOptions = {
    locale: 'en',
    clientSecret: '',
  };

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
  };

  paying = false;
  orders: any = [{name:'test'}];

  ngOnInit(): void {
    this.updateList();

    this.dataService.addData('orders', this.orders);
    this.paymentElementForm.get('amount')?.setValue(this.totalCost * 100);
    this.createPaymentIntent(
      this.paymentElementForm.get('amount')?.value
    ).subscribe((pi: any) => {
      this.elementsOptions.clientSecret = pi.clientSecret as string;
      this.dataService.getData().subscribe((values: any) => {
        console.log(values)
        // this.orders = values.orders;
      });
    });
  }

  updateList() {
    this.items = this.cartService.getCartItems();
    this.getTotalCost();
  }

  delete(index: number) {
    this.cartService.deleteItem(index);
    this.updateList();
    this.openSnackBar('Item removed ..!');
  }

  getTotalCost() {
    this.totalCost = this.cartService.getTotalCost();
  }

  pay() {
    this.paying = true;
    this.stripeService
      .confirmPayment({
        elements: this.paymentElement.elements,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              name: this.paymentElementForm.get('name')?.value as string,
              email: this.paymentElementForm.get('email')?.value as string,
              address: {
                line1: this.paymentElementForm.get('address')?.value || '',
                postal_code:
                  this.paymentElementForm.get('zipcode')?.value || '',
                city: this.paymentElementForm.get('city')?.value || '',
              },
            },
          },
        },

        redirect: 'if_required',
      })
      .subscribe((result: any) => {
        this.paying = false;
        this.createPaymentIntent(
          this.paymentElementForm.get('amount')?.value
        ).subscribe((pi) => {
          this.elementsOptions.clientSecret = pi.client_secret as string;
        });
        if (result.error) {
          this.openSnackBar('Error '+result.error.message);
          // alert({ success: false, error: result.error.message });
        } else {
          if (result.paymentIntent.status === 'succeeded') {
            this.paymentElementForm.value.items = this.items;
            this.paymentElementForm.value.date = Date.now().toString();
            this.orders.push(this.paymentElementForm.value);
            this.dataService.addData('orders', this.orders);
            this.openSnackBar('Order Placed Payment Successfull');
            // alert('Order Placed Payment Successfull');
          }
        }
      });
  }

  createPaymentIntent(amount: any): Observable<PaymentIntent> {
    return this.http.post<PaymentIntent>(
      `${'https://metaculture-payment-service.herokuapp.com'}/create-payment-intent`,
      { amount }
    );
  }

  openSnackBar(text: string) {
    this._snackBar.open(text, 'Okay ', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 2 * 1000,
    });
  }
}
