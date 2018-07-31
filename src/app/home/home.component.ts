import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  category: String;
  homeProducts : any;
  productCategory : String;

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.Product('eye');
  }

  Product(category){
    this.restService.getProductByCategory(category).subscribe((response) =>{
      this.homeProducts = response;
      console.log(this.homeProducts);
    });
  }
}
