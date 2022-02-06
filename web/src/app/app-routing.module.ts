import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoComponent } from './acesso/acesso.component';
import { CadastroDadosComponent } from './acesso/cadastro-dados/cadastro-dados.component';
import { CardComponent } from './acesso/card/card.component';
import { LoginComponent } from './acesso/login/login.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'acesso', component: AcessoComponent },
  // { path: 'card', component: CardComponent },
  { path: 'card', component: CardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cdsDados', component: CadastroDadosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
