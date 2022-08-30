import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../cart.service';
import { StripeService, StripePaymentElementComponent, StripeCardComponent } from 'ngx-stripe';
import { StripeElementsOptions, PaymentIntent, StripeCardElementOptions } from '@stripe/stripe-js';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @ViewChild(StripeCardComponent) card!: StripeCardComponent;

  constructor(
    private cartService: CartService,
    private http: HttpClient,
    private fb: FormBuilder,
    private stripeService: StripeService
  ) {}
  items: any = [];
  name: string = '';
  totalCost: number = 0;

  paymentElementForm = this.fb.group({
    name: [''],
    email: [''],
    address: [''],
    zipcode: [''],
    city: [''],
    amount: [2500],
  });

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

  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };

  paying = false;

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
    this.totalCost = this.cartService.getTotalCost();
  }

  pay() {
    if (this.paymentElementForm.valid) {
      this.paying = true;
      this.stripeService
        .confirmPayment({
          elements: this.card.elements,
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
          console.log('Result', result);
          this.createPaymentIntent(
            this.paymentElementForm.get('amount')?.value
          ).subscribe((pi) => {
            this.elementsOptions.clientSecret = pi.client_secret as string;
          });
          if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            alert({ success: false, error: result.error.message });
          } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
              // Show a success message to your customer
              alert({ success: true });
            }
          }
        });
    } else {
      console.log("in else", this.paymentElementForm);
    }
  }

  private createPaymentIntent(amount: any): Observable<PaymentIntent> {
    return this.http.post<PaymentIntent>(
      `${'http://localhost:4242'}/create-payment-intent`,
      { amount }
    );
  }
}
