import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './access/access.component';
import { CardComponent } from './access/card/card.component';
import { LoginComponent } from './access/login/login.component';
import { RegisterDiceComponent } from './access/register-dice/register-dice.component';
import { RegisterPaymentComponent } from './access/register-payment/register-payment.component';
import { RegisterAddressComponent } from './access/register-address/register-address.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'access', component: AccessComponent },
  { path: 'card', component: CardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rDice', component: RegisterDiceComponent },
  { path: 'rPayment', component: RegisterPaymentComponent },
  { path: 'rAddress', component: RegisterAddressComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
