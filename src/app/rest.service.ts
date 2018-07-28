import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {


  InsertURL = environment.InsertUrl;
  LoginUrl = environment.LoginUrl;
  buyProductURL = environment.buyProductURL;
  loadCartURL = environment.loadCartURL;
  deletecartitemURL = environment.deletecartitemURL;
  loadUser = environment.loadUser;
  orderUpdate = environment.orderUpdate;
  // loginUrl = environment.loginUrl;

  constructor(private  httpClient:  HttpClient) { }

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

  // login(obj){
    // const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    // return this.httpClient.post(`${this.loginUrl}`, obj, {headers: headers});
   // }
}
