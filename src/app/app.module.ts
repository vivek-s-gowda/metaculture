import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { FooterComponent } from './footer/footer.component';
import { CourcesComponent } from './cources/cources.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, DialogOverviewExampleDialog } from './home/home.component';
import { PostersComponent } from './posters/posters.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseItemsComponent } from './cources/course-items/course-items.component';
import { PosterItemsComponent } from './posters/poster-items/poster-items.component';
import { CartComponent } from './cart/cart.component';
import { NgxStripeModule } from 'ngx-stripe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'courses', component: CourcesComponent },
  { path: 'posters', component: PostersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: PageNotFoundComponent },
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
    CartComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxStripeModule.forRoot(
      'pk_live_51LaJOSJIKT96wNYEYlClXuhyL6rOAbg42SHXVp8wm6F87Gg7VrfVLYjVvnpPRvR08kvJPUbvkKObTQb0wNdvBPcz00tvHDlAhf'
    ),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatInputModule,
    MatToolbarModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
