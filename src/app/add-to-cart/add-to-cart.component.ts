import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  
    id: String;
    listProducts: any;
    user: any;
  constructor(private router: Router, private restService: RestService, private localStorageService: LocalStorageService) { 
  }

  ngOnInit() {
    this.user = this.localStorageService.get('user_object');
    this.id = this.user.user_id;
    this.loadCart(this.id);
  }

  loadCart(id) {
    this.restService.loadCart(id).subscribe((response) => {
      this.listProducts = response;
    });
  }

  delete(event) {
    this.id = event.target.id;
    this.restService.deleteItemFromCart(this.id).subscribe((response) => {
      this.loadCart(this.id);
    });
  }

  navigateToHome(){
    this.router.navigate(['/home'], {queryParams: {}});
  }

  navigateToCheckout(){
    this.router.navigate(['/buy'], {queryParams: {}});
  }
}
