import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import { RESTService } from '../restservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  currentRate = 1;
  feedbackForm: FormGroup;
  user: any;

  constructor(private fb: FormBuilder, private restService: RESTService, private router: Router) {}
    ngOnInit() {

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
      product_id: '1',
      user_firstname : 'karthick',
      review: this.feedbackForm.get('review').value,
      rating: this.feedbackForm.get('rating').value
      };

    this.restService.postReviewbyProduct(feedback).subscribe((response: Response) => {

          alert('User Feedback submitted successful');
});

    this.router.navigate(['/product'], { preserveQueryParams: true });


}




}

