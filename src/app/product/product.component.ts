import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
import { LocalStorageService } from 'angular-2-local-storage';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId: String;
  id: String;
  userId: String;
  quantity: String;
  product: any;
  user: any;


  constructor(private router: Router, private route: ActivatedRoute, private restService: RestService; private localStorageService: LocalStorageService) {
    // this.productId = this.route.snapshot.params.param1;
  }

  ngOnInit() {
    //this.Product(12);
    this.user = this.localStorageService.get('user_object');
    this.id = this.user.user_id;
    this.product = this.localStorageService.get('product_object')[0];
  }

  // Product(id){
    // this.restService.getProduct(id).subscribe((response) => {
      // this.product = response;
      // console.log(this.product);
    // });
  // }

  
insertIntoCart() {
  this.productId = event.target.id;
  
  const obj = {
    'productId': this.productId,
    'userId': this.id
  };
  console.log(obj);
  
  this.restService.buyProduct(obj).subscribe((response) => {
    this.router.navigate(['/cart'], {queryParams: {}});
  });
 }
 

  buy(event) {
    this.productId = event.target.id;
    
    const obj = {
      'productId': this.productId,
      'userId': this.id
    };
    console.log(obj);
    
    this.restService.buyProduct(obj).subscribe((response) => {
      this.router.navigate(['/buy'], {queryParams: {}});
    });
  }
}
