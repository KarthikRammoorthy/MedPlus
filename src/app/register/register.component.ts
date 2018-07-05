import { Component, OnInit } from '@angular/core';
//import { FormGroup , FormControl } from '@angular/forms';
import { AbstractControl, FormGroupDirective, FormBuilder, FormControl, Validators ,FormsModule,NgForm, FormGroup } from '@angular/forms';
import { RegistrationValidator } from '../register/register.validator';
import {  Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  navigationSubscription;

  //constructor(private formBuilder: FormBuilder, private router: Router) { 
    constructor(private formBuilder: FormBuilder) { 
    this.passwordGroup = this.formBuilder.group({
      password: ['', Validators.required],
      reenterpassword: ['', Validators.required]
    }, {
      validator: RegistrationValidator.validate.bind(this)
    });
    this.registerForm = this.formBuilder.group({
      firstname : ['',Validators.required],
      lastname : ['',Validators.required],
      emailid : ['',Validators.required],
      suite : ['',Validators.required],
      street : ['',Validators.required],
      city : ['',Validators.required],
      zip : ['',Validators.required],
      passwordGroup: this.passwordGroup
        
    });

    //this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      //if (e instanceof NavigationEnd) {
        //this.initialiseInvites();
      //}
    //});
  }

  registerForm: FormGroup;
  passwordGroup: FormGroup;
  unamePattern = "/^[a-zA-Z\s]*$"; 

  initialiseInvites() {
    // Set default values and re-fetch any data you need.
  }

ngOnInit() {}

  /*this.registerForm = new FormGroup({
    firstname : new FormControl('', [Validators.required, Validators.pattern(this.unamePattern)]),
    lastname : new FormControl('', [Validators.required, Validators.pattern(this.unamePattern)]),
    emailid : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)]),
    reenterpassword : new FormControl('', [Validators.required, Validators.pattern(this.unamePattern)]),
    suite : new FormControl('', [Validators.required]),
});
  
}


 function passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value
       ? null : {'mismatch': true};
 } 



getErrorMessage() {
return this.registerForm.get('firstname').hasError('required') ? 'You must enter a value' :
this.registerForm.get('firstname').hasError('pattern') ? 'Not a valid first name' :
this.registerForm.get('password').hasError('required') ? 'Not a valid first name' :
       '';
}
 */

}
  

  


