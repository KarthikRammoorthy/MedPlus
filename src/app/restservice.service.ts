import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'

})
export class RESTService {

  constructor(private  httpClient:  HttpClient) { }


   getUserbyMailURL  =  environment.getUserbyMailRLU;
   postReviewbyProductURL = environment.postReviewbyProductURL;
   getproductDetailsURL =  environment.getProductbyProductURL;
  // apiUrlFeedback = environment.apiUrlFeedback;
  // getBusinessLogicURL = environment.getBusinessLogicURL;


  getUserbyMail(user_Email) {
    return  this.httpClient.get(`${this.getUserbyMailURL}/${user_Email}`);
  }

  postReviewbyProduct(feedback) {
    return  this.httpClient.post(`${this.postReviewbyProductURL}`, feedback);
  }


 /*  getPatient(patient){

      return  this.httpClient.post(`${this.API_URL}`,patient);

} */


}
