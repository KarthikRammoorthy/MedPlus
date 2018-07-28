import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

import {ProductComponent} from './product/product.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {CheckoutComponent} from './checkout/checkout.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, runGuardsAndResolvers: 'always' },
  { path: 'register', component: RegisterComponent, runGuardsAndResolvers: 'always' },
  { path: 'orderhistory', component: OrderHistoryComponent, runGuardsAndResolvers: 'always' },
  {path: 'product', component: ProductComponent},
  {path: 'cart', component: AddToCartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'product/buy', component: CheckoutComponent},
  {path: 'buy', component: CheckoutComponent}
];

@NgModule({
  imports: [
    CommonModule,
     // RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
