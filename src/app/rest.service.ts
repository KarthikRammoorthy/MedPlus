import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {


  InsertURL = environment.InsertUrl;

  constructor(private  httpClient:  HttpClient) { }

  createUser(user){

    return  this.httpClient.post(`${this.InsertURL}`,user);

  }
}
