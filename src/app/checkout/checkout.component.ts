import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  id: String;
  listProducts: any;
  user: any;
  paymentForm: FormGroup;

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.loadCart(1);
    this.loadUserAddress(1);
    this.paymentForm = new FormGroup({
      cardNumber: new FormControl(),
        expiryDate: new FormControl(),
      cvv: new FormControl(),
      name: new FormControl(),
    });
  }

loadCart(id) {
  this.restService.loadCart(id).subscribe((response) => {
    this.listProducts = response;
    console.log(this.listProducts);
  });
}

loadUserAddress(id) {
  this.restService.loadUserDetails(id).subscribe((response) => {
    this.user = response;
  });
}

delete(event) {
  this.id = event.target.id;
  this.restService.deleteItemFromCart(this.id).subscribe((response) => {
    this.loadCart(1);
  });
}

onFormSubmit() {
  const obj = {
    'listProducts': this.listProducts,
    'userId': '1'
  };
  this.restService.orderUpdateFunct(obj).subscribe((response) => {
    console.log(response);
  });
}

}
