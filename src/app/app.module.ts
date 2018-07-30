import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductComponent } from './product/product.component';
import { AddToCartComponent} from './add-to-cart/add-to-cart.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule} from '@angular/common/http';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductModule } from './product/product.module';
import { SearchresultComponent } from './searchresult/searchresult.component';
import {FeedbackComponent} from './feedback/feedback.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { LocalStorageModule } from 'angular-2-local-storage';



import { MatInputModule } from '@angular/material';
import {MatChipsModule,} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SearchComponent,
    CarouselComponent,
    HomeCardComponent,
    RegisterComponent,
    OrderHistoryComponent,
    NavigationComponent,
    ProductComponent,
    AddToCartComponent,
    CheckoutComponent,
    SearchresultComponent,
    FeedbackComponent,
    SearchbarComponent,
    LogoutComponent
  ],
  imports: [
    MatInputModule,
    MatChipsModule,
    MatExpansionModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    ProductModule,
    NgbModule.forRoot(),
    LocalStorageModule.withConfig({
      prefix: 'first-app',
      storageType: 'localStorage'
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
