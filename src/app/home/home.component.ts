import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PaymentIntent, StripeElementsOptions } from '@stripe/stripe-js';
import { StripePaymentElementComponent, StripeService } from 'ngx-stripe';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  images = [1, 2, 3].map((n) => `assets/images/slide${n}.png`);
  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '60%',
      // data: ,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `<h1 mat-dialog-title>Hi</h1>
  <div mat-dialog-content>
    <p>Thanks For Contributing </p>
  </div>

  <div class="right-layout-container">
    <div class="form">
      <div class="details">Personal Information</div>


      <form [formGroup]="paymentElementForm">
        <input
          type="text"
          class="input"
          placeholder="Name*"
          formControlName="name"
        />
        <input type="text" class="input" placeholder="Email*" formControlName="email"/>
        <input type="text" class="input" placeholder="Address" formControlName="address"/>
        <input type="text" class="input" placeholder="City" formControlName="city"  />
        <input type="text" class="input" placeholder="Zip Code" formControlName="zipcode"/>
        <input type="text" class="input" placeholder="Amount" formControlName="amount"/>
        <ng-container *ngIf="elementsOptions?.clientSecret as clientSecret">
          <ngx-stripe-payment [clientSecret]="clientSecret">
          </ngx-stripe-payment>
        </ng-container>
        <button class="btn" (click)="pay()">PAY</button>
</form>
    </div>
  </div>
  
  <div mat-dialog-actions>
    <button mat-button (click)="onNoClick()">No Thanks</button>
  </div>`,
  styleUrls: ['./home.component.scss']
})
export class DialogOverviewExampleDialog implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private fb: FormBuilder,
    private dataService: DataService,
    private stripeService: StripeService,
    private _snackBar: MatSnackBar
  ) {}

  @ViewChild(StripePaymentElementComponent)
  paymentElement!: StripePaymentElementComponent;
  elementsOptions: StripeElementsOptions = {
    locale: 'en',
    clientSecret: '',
  };
  
  totalCost: string = "";
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
  
ngOnInit(): void {

  this.paymentElementForm.get('amount')?.setValue(1000/100);
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
  onNoClick(): void {
    this.dialogRef.close();
  }

  pay() {
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
            this.openSnackBar('Order Placed Payment Successfull');
            this.onNoClick();
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
