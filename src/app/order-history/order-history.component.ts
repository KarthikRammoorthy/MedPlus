import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

 Orders = [
    {id: 1, name:'Paracetamol', orderdate:'12 January 2018', ordernumber:'12341dskjfn123', quantity: 10, price:'$122'},
    {id: 1, name:'Volini', orderdate:'12 January 2018', ordernumber:'12341dskjfn123', quantity: 10, price:'$122'},
    {id: 1, name:'Paracetamol', orderdate:'12 January 2018', ordernumber:'12341dskjfn123', quantity: 10, price:'$122'},
    {id: 1, name:'Paracetamol', orderdate:'12 January 2018', ordernumber:'12341dskjfn123', quantity: 10, price:'$122'},
    {id: 1, name:'Paracetamol', orderdate:'12 January 2018', ordernumber:'12341dskjfn123', quantity: 10, price:'$122'}
];
  constructor() { }

  ngOnInit() {
  }

}
