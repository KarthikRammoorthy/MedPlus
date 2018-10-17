import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { LocalStorageService } from 'angular-2-local-storage';
import { DatasharingService } from '../datasharing.service';
import { RestService } from '../rest.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: any;

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private  restService:  RestService , private router: Router, private dataSharingService: DatasharingService, private localStorageService: LocalStorageService) { }

  // tslint:disable-next-line:max-line-length


  ngOnInit() {

    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
  });
}
get email() {
  return this.loginForm.get('email');
}
get password() {
  return this.loginForm.get('password');
}

/*get isLoggedIn() {
  return this.loggedIn.asObservable(); // {2}
}*/

onClickLogin() {

  //alert('please wait!!');
  // tslint:disable-next-line:prefer-const
  // tslint:disable-next-line:no-var-keyword
  const verify = this.loginForm.get('email').value;
  const mail = this.loginForm.get('email').value + '/';
  const password = this.loginForm.get('password').value;
  // tslint:disable-next-line:quotemark
  if (mail !== '' && password !== '' ) {
    this.restService.getUserbyMail(mail).subscribe((response: Response) => {

    console.log(response);
    this.user = response;
    console.log(this.user.user_password);
    console.log(this.user.user_email);
    if ( verify === this.user.user_email && password === this.user.user_password) {
      this.dataSharingService.isUserLoggedIn.next(true);
      this.localStorageService.set('user_object',this.user);
      //this.localStorageService.set('key','user_logged_in');
      //alert('login successful');
      // this.loggedIn.next(true);
      // console.log(this.localStorageService.get('key'));
      this.router.navigate(['/home'], { preserveQueryParams: true });

    } else {
      alert('Invalid Credentials...Please try again');
      this.loginForm.reset();
    }
});
  }
}



}

