import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { FooterComponent } from './footer/footer.component';
import { CourcesComponent } from './cources/cources.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostersComponent } from './posters/posters.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseItemsComponent } from './cources/course-items/course-items.component';
import { PosterItemsComponent } from './posters/poster-items/poster-items.component';
import { CartComponent } from './cart/cart.component';
import { NgxStripeModule } from 'ngx-stripe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'courses', component:  CourcesComponent},
  { path: 'posters', component:  PostersComponent},
  { path: 'contact', component:  ContactComponent},
  { path: 'cart', component:  CartComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CommonHeaderComponent,
    FooterComponent,
    CourcesComponent,
    HomeComponent,
    PostersComponent,
    ContactComponent,
    PageNotFoundComponent,
    CourseItemsComponent,
    PosterItemsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxStripeModule.forRoot('pk_test_51ILY4WL6352tfZcGaBspzuGTKIjdDJY9InSqoship9ERNaKEiGscPGzpo49gZNGbVawO1nJoGU58DVqczMe8jG0n00r1oh4WnL'),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }