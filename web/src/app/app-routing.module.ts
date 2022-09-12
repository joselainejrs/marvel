import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccessComponent } from './access/access.component';
import { CardComponent } from './access/card/card.component';
import { LoginComponent } from './access/login/login.component';
import { RegisterDiceComponent } from './access/register-dice/register-dice.component';
import { RegisterPaymentComponent } from './access/register-payment/register-payment.component';
import { RegisterAddressComponent } from './access/register-address/register-address.component';

import { ComicBooksComponent } from './comic-books/comic-books.component';
import { HeaderComponent } from './comic-books/header/header.component';
import { ProfileComponent } from './access/profile/profile.component';
import { DetailsBooksComponent } from './comic-books/details-books/details-books.component';
import { CardBooksComponent } from './comic-books/card-books/card-books.component';
import { HqBooksComponent } from './comic-books/hq-books/hq-books.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'access', component: AccessComponent },
  { path: 'card', component: CardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rDice', component: RegisterDiceComponent },
  { path: 'rPayment', component: RegisterPaymentComponent },
  { path: 'rAddress', component: RegisterAddressComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'comic', component: ComicBooksComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'hqBooks', component: HqBooksComponent },
  { path: 'details', component: DetailsBooksComponent },
  { path: 'books', component: CardBooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
