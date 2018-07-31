import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {


  listUser: any;
  private userid:  String = "";
  listOrderHistory: any;
  


  constructor(private localStorageService: LocalStorageService, private  restService:  RestService, private router: Router) { 

    this.GetUserDetails();
    this.displayOrderHistory();
  }


  ngOnInit() {
  }

  displayOrderHistory() {
    this.restService.getOrderHistory(this.userid).subscribe((response:Response) => {

      this.listOrderHistory = response;

  });
}

  GetUserDetails()
  {
    this.listUser = this.localStorageService.get('user_object');
    this.userid = this.listUser.user_id;

  }

  DeleteOrderHistory(order: any){
    if(confirm("Are you sure to delete this appointment?")) {
    this.restService.deleteOrderHistory(order.order_id).subscribe((response: Response) => {
      this.router.navigate(['dummy']);

    });
  }

  }



}
