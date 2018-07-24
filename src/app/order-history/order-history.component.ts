import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  private userid:  String =  "1";
  listOrderHistory: any;


  constructor(private  restService:  RestService) { 
    this.displayOrderHistory();
  }


  ngOnInit() {
  }

  displayOrderHistory() {
    this.restService.getOrderHistory(this.userid).subscribe((response:Response) => {

      this.listOrderHistory = response;

  });

}

}
