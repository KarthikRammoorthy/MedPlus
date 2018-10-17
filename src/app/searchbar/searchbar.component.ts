import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatasharingService } from '../datasharing.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  searchterm: string = "";
  isUserLoggedIn: boolean;


    constructor(private router: Router, private dataSharingService: DatasharingService, private localStorageService: LocalStorageService) {
      this.dataSharingService.isUserLoggedIn.subscribe( value => {
        this.isUserLoggedIn = value;
    });
   }

  ngOnInit() {
    
  }

  doSearch() {
    this.router.navigate(['searchresult', {searchterm: this.searchterm}]);
  }

}
