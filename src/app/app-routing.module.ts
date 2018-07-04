import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, runGuardsAndResolvers: 'always' },
  { path: 'register', component: RegisterComponent, runGuardsAndResolvers: 'always' },
  { path: 'orderhistory', component: OrderHistoryComponent, runGuardsAndResolvers: 'always' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
