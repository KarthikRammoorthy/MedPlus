import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  // tslint:disable-next-line:no-inferrable-types
  searchterm: string = '';

  ngOnInit() {



  }

  doSearch() {
    this.router.navigate(['searchresult', {searchterm: this.searchterm}]);
  }

}
