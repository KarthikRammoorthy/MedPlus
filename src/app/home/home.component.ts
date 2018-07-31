import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  category: String;
  eyeProducts : any;
  productCategory : String;
  earProducts: any;

  constructor(private router: Router, private restService: RestService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.ProductEye('eye');
    this.ProductCold('cold');
  }

  ProductEye(category) {
    this.restService.getProductByCategory(category).subscribe((response) =>{
      this.eyeProducts = response;
      console.log(this.eyeProducts);
    });
  }

  ProductCold(category) {
    this.restService.getProductByCategory(category).subscribe((response) =>{
      this.earProducts = response;
      console.log(this.earProducts);
    });
  }

  NavigateProductInfo(product: any) {
    this.localStorageService.set('product_object', product);
    this.router.navigate(['/product'], {queryParams: {}});
 
}
}
