import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  private searchterm: string = "";
  listProducts: any;

  constructor(private router: Router, private activatedroute: ActivatedRoute, private  restService:  RestService, private localStorageService: LocalStorageService) { 

    this.activatedroute.params.subscribe(params =>{
      this.searchterm = params['searchterm'];
      this.displaySearchResult(this.searchterm);

    });
  }

  ngOnInit() {
  }
  NavigateProductInfo(product: any) {
    this.localStorageService.set('product_object', product);
    this.router.navigate(['/product'], {queryParams: {}});
 
}

  displaySearchResult(searchterm: string) {
    this.restService.getProductByName(searchterm).subscribe((response:Response) => {

      this.listProducts = response;
      if(!this.listProducts[0]) {
      this.router.navigate(['home']);
      alert("No Products found by this name/category.");
      }
      else {
       
        this.localStorageService.set('product_object', this.listProducts);
      }

  });

}
}
