import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { RegisterPaymentComponent } from './register/register-payment/register-payment.component';
import { RegisterAddressComponent } from './register/register-address/register-address.component';
import { RegisterDiceComponent } from './register/register-dice/register-dice.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './components/card-register-login/card.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { TitleComponent } from './components/title/title.component';
import { HqBooksComponent } from './comic-books/hq-books/hq-books.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailsBooksComponent } from './comic-books/details-books/details-books.component';
import { CardBooksComponent } from './components/card-books/card-books.component';

@NgModule({
  declarations: [
    CardBooksComponent,
    DetailsBooksComponent,
    HeaderComponent,
    HqBooksComponent,
    TitleComponent,
    RegisterPaymentComponent,
    RegisterAddressComponent,
    RegisterDiceComponent,
    LoginComponent,
    CardComponent,
    ProfileComponent
  ],
  exports: [
    CardBooksComponent,
    DetailsBooksComponent,
    HeaderComponent,
    HqBooksComponent,
    TitleComponent,
    RegisterPaymentComponent,
    RegisterAddressComponent,
    RegisterDiceComponent,
    LoginComponent,
    CardComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),

  ]
})
export class PagesModule { }
