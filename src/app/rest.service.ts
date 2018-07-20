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
  constructor(private  httpClient:  HttpClient) { }

  createUser(user){

    return  this.httpClient.post(`${this.InsertURL}`, user);
  }

  login(){
    return this.httpClient.post(`${this.LoginUrl}`,"admin");
  }

  buyProduct(obj) {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    return this.httpClient.post(`${this.buyProductURL}`, obj, {headers: headers});
  }

  loadCart(id) {
    return  this.httpClient.get(`${this.loadCartURL}` + '/' + id);
  }
}
