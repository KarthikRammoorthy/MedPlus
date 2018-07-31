import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { DatasharingService } from '../datasharing.service';



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
  productInfo: any;
  user: any;
  isUserLoggedIn: boolean;


  constructor(private router: Router, private route: ActivatedRoute, private dataSharingService: DatasharingService, private restService: RestService, private localStorageService: LocalStorageService) {
    // this.productId = this.route.snapshot.params.param1;
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
        this.isUserLoggedIn = value;
    });
  }

  ngOnInit() { 
    //this.Product(12);
    this.productInfo = this.localStorageService.get('product_object');
    console.log(this.productInfo);
    // this.user = this.localStorageService.get('user_object');
    // this.id = this.user.user_id;
  }

  // Product(id){
  // this.restService.getProduct(id).subscribe((response) => {
  // this.product = response;
  // console.log(this.product);
  // });
  // }


  insertIntoCart() {
    if (!this.isUserLoggedIn) {
      this.router.navigate(['login']);
    } else {
      this.user = this.localStorageService.get('user_object');
      this.id = this.user.user_id;
    const obj = {
      'productId': this.productInfo.product_id,
      'userId': this.id
    };
    console.log(obj);

    this.restService.buyProduct(obj).subscribe((response) => {
      this.router.navigate(['/cart'], { queryParams: {} });
    });
    }
  }


  buy(event) {

    if (!this.isUserLoggedIn) {
      this.router.navigate(['login']);
    } else {

      this.user = this.localStorageService.get('user_object');
      this.id = this.user.user_id;

      const obj = {
        'productId': this.productInfo.product_id,
        'userId': this.id
      };
      console.log(obj);
  
      this.restService.buyProduct(obj).subscribe((response) => {
        this.router.navigate(['/buy'], { queryParams: {} });
      });
    }    
  }
}
