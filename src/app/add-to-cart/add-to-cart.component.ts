import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  aspirin: string;
  constructor() { 
    this.aspirin = 'assets/images/i2.jpg'
  }

  ngOnInit() {
  }

}
