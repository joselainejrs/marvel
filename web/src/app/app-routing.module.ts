import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsBooksComponent } from './pages/comic-books/details-books/details-books.component';
import { HqBooksComponent } from './pages/comic-books/hq-books/hq-books.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterAddressComponent } from './pages/register/register-address/register-address.component';
import { RegisterDiceComponent } from './pages/register/register-dice/register-dice.component';
import { RegisterPaymentComponent } from './pages/register/register-payment/register-payment.component';
import { ModalActionComponent } from './components/modals/modal-action/modal-action.component';
import { ModalPayComponent } from './components/modals/modal-pay/modal-pay.component';
import { ModalStatusComponent } from './components/modals/modal-status/modal-status.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  { path: 'login', component: LoginComponent },

  { path: 'register/dice', component: RegisterDiceComponent },
  { path: 'register/payment', component: RegisterPaymentComponent },
  { path: 'register/address', component: RegisterAddressComponent },
  
  { path: 'comic/hqlist', component: HqBooksComponent },
  { path: 'comic/hqdetails/:id', component: DetailsBooksComponent },

  { path: 'modal/action', component: ModalActionComponent },
  { path: 'modal/payment', component: ModalPayComponent },
  { path: 'modal/status', component: ModalStatusComponent },

  { path: 'profile', component: ProfileComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
