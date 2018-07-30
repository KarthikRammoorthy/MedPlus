import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router, ActivatedRoute } from '@angular/router';
import { DatasharingService } from '../datasharing.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService, private router: Router, private dataSharingService: DatasharingService) {
    this.localStorageService.clearAll();
    this.dataSharingService.isUserLoggedIn.next(false);
    this.router.navigateByUrl("/searchbar", {skipLocationChange: false}).then(()=>
    this.router.navigate(['home']));
   }

  ngOnInit() {
  }

}
