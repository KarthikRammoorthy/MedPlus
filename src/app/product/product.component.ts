import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RestService } from '../rest.service';
import {ProductModule} from './product.module';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId: String;
  listProducts: any;

  constructor(private route: ActivatedRoute, private restService: RestService) {
    // this.productId = this.route.snapshot.params.param1;
  }

  ngOnInit() {
  }

  buy(event) {
    this.productId = event.target.id;
    console.log(event);
    console.log(this.productId);
    
    const obj = {
      'productId': '12',
      'userId': '1'
    };
    console.log(obj);

    this.restService.buyProduct(obj).subscribe((response) => {
      this.listProducts = response;
    });
  }
}
