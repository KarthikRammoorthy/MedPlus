import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'product', component: ProductComponent},
  {path: 'login', component: LoginComponent},
  {path: 'feedback', component: FeedbackComponent}];

// @NgModule({
//   imports: [ RouterModule.forRoot(appRoutes) ],
//   exports: [ RouterModule ]
// })


@NgModule({
  imports: [
    CommonModule,
     // RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {}
