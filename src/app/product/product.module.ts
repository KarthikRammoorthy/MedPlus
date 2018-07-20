import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ProductModule {
  productId: String;
  productName: String;
  productQuantity: number;
  productPrice: number;
}
