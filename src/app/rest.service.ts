import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {


  InsertURL = environment.InsertUrl;
  LoginUrl = environment.LoginUrl;
  searchProductURL = environment.searchProductURL;
  orderhistoryURL = environment.orderhistoryURL;
  buyProductURL = environment.buyProductURL;
  loadCartURL = environment.loadCartURL;
  deletecartitemURL = environment.deletecartitemURL;
  loadUser = environment.loadUser;
  orderUpdate = environment.orderUpdate;
  getProductUrl = environment.getProductUrl;
  insertIntoCartURL= environment.insertIntoCartURL;
  getUserbyMailURL  =  environment.getUserbyMailURL;
  postReviewbyProductURL = environment.postReviewbyProductURL;
  getproductDetailsURL =  environment.getProductbyProductURL;


  constructor(private  httpClient:  HttpClient) { }

  createUser(user){

    return  this.httpClient.post(`${this.InsertURL}`, user);
  }

  login(){
    return this.httpClient.post(`${this.LoginUrl}`,"admin");
  }

  getProductByName(searchterm){

    return this.httpClient.get(`${this.searchProductURL}/${searchterm}`);
  }

  getOrderHistory(id){
    return this.httpClient.get(`${this.orderhistoryURL}/${id}`);
  }

  buyProduct(obj) {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    return this.httpClient.post(`${this.buyProductURL}`, obj, {headers: headers});
  }

  loadCart(id) {
    return  this.httpClient.get(`${this.loadCartURL}` + '/' + id);
  }

  deleteItemFromCart(id) {
    return this.httpClient.delete(`${this.deletecartitemURL}` + '/' + id);
  }

  loadUserDetails(id) {
    return this.httpClient.get(`${this.loadUser}` + '/' + id);
  }

  orderUpdateFunct(obj){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    return this.httpClient.post(`${this.orderUpdate}`, obj, {headers: headers});
  }

  insertCart(ob){
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    return this.httpClient.post(`${this.insertIntoCartURL}`, ob, {headers: headers});
  }

  getProduct(id){
    console.log(`${this.getProductUrl}` + id);
    return  this.httpClient.get(`${this.getProductUrl}` + id);
  }

 getUserbyMail(user_Email) {
   return  this.httpClient.get(`${this.getUserbyMailURL}/${user_Email}`);
 }

 postReviewbyProduct(feedback) {
   return  this.httpClient.post(`${this.postReviewbyProductURL}`, feedback);
 }


}
