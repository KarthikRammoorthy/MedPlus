import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  private searchterm: string = "";
  listProducts: any;

  constructor(private router: Router, private activatedroute: ActivatedRoute, private  restService:  RestService) { 

    this.activatedroute.params.subscribe(params =>{
      this.searchterm = params['searchterm'];
      this.displaySearchResult(this.searchterm);

    });
  }

  ngOnInit() {
  }

  displaySearchResult(searchterm: string) {
    this.restService.getProductByName(searchterm).subscribe((response:Response) => {

      this.listProducts = response;
      if(!this.listProducts[0]) {
    
     
      this.router.navigate(['home']);
      alert("No values returned.");
      }

  });

}
}
