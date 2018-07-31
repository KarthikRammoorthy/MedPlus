import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  currentRate = 1;
  feedbackForm: FormGroup;
  user: any;
  product: any;

  constructor(private fb: FormBuilder, private restService: RestService, private router: Router,private localStorageService: LocalStorageService) {}
    ngOnInit() {
      this.user = this.localStorageService.get('user_object');

      if(!this.user){
        alert("Please login to provide feedback")
        this.router.navigate(['/login'], { preserveQueryParams: true });

      }
      this.product = this.localStorageService.get('product_object')[0];



     this.feedbackForm = this.fb.group({
      review: ['', [
        Validators.required
      ]],
      rating: ['', [
        Validators.required
      ]]
  });
  }

  get review() {
  return this.feedbackForm.get('review');
}
get rating() {
  return this.feedbackForm.get('rating');
}


onClickSubmit() {
       // tslint:disable-next-line:prefer-const
      let feedback = {
      product_id: this.product.product_id,
      user_firstname : this.user.user_firstname,
      review: this.feedbackForm.get('review').value,
      rating: this.feedbackForm.get('rating').value
      };
      console.log(feedback);
    this.restService.postReviewbyProduct(feedback).subscribe((response: Response) => {

          alert('User Feedback submitted successful');
});

    this.router.navigate(['/dummy2'], { preserveQueryParams: true });


}




}

