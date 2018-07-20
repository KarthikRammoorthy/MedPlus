import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.loadCart(1);
  }

loadCart(id) {
  this.restService.loadCart(id).subscribe((response) => {
    console.log(response);
  });
}

}
