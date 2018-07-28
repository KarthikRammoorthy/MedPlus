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
      cardNumber: new FormControl('', [Validators.required,
        Validators.pattern('^[0-9]{16}$')]),
        expiryDate: new FormControl('', [Validators.required]),
      cvv: new FormControl('', [Validators.required,
        Validators.pattern('^[0-9]{3}$')]),
      name: new FormControl('', [Validators.required,
        Validators.pattern('^[a-z A-Z]+$')]),
    });
  }

loadCart(id) {
  this.restService.loadCart(id).subscribe((response) => {
    this.listProducts = response;
  });
}

loadUserAddress(id) {
  this.restService.loadUserDetails(id).subscribe((response) => {
    this.user = response;
  });
  this.loadCart(1);
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

  if (this.listProducts.length === 0) {
    alert('No product present in Cart');
  } else {
    this.restService.orderUpdateFunct(obj).subscribe((response) => {
      this.loadCart(1);
      alert('Order placed succesfully');
    });
  }
}

}
