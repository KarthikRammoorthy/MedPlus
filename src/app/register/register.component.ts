import { Component, OnInit } from '@angular/core';
//import { FormGroup , FormControl } from '@angular/forms';
import { AbstractControl, FormGroupDirective, FormBuilder, FormControl, Validators ,FormsModule,NgForm, FormGroup } from '@angular/forms';
import { RegistrationValidator } from '../register/register.validator';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog} from "@angular/material";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {


  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  //passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  passwordPattern = "^[a-zA-Z0-9?=.*?[#?!@$%^&*-]{8,}$$";
  phonePattern = "^[0-9]{10}$";
  suitePattern = "^[0-9]{1,5}$";
  zipcodePattern = "[ABCEGHJKLMNPRSTVXY abceghjklmnprstvxy][0-9][ABCEGHJKLMNPRSTVWXYZ abceghjklmnprstvxy] ?[0-9][ABCEGHJKLMNPRSTVWXYZ abceghjklmnprstvxy][0-9]"
  registerForm: FormGroup;
  passwordGroup: FormGroup;









  constructor(private formBuilder: FormBuilder, private restService: RestService, private router: Router,public dialog : MatDialog) { }




ngOnInit() {



  this.passwordGroup = this.formBuilder.group({
    password:  ['', [Validators.required,  Validators.pattern(this.passwordPattern) ]],
    reenterpassword:   ['',  Validators.required],
  }, {
    validator: RegistrationValidator.validate.bind(this)
  });


  this.registerForm = this.formBuilder.group({
    firstname : ['',Validators.required],
    lastname : ['',Validators.required],
    emailid : ['',[Validators.required , Validators.pattern(this.emailPattern)]],
    phone : ['',[Validators.required , Validators.pattern(this.phonePattern)]],
    suite : ['',[Validators.required , Validators.pattern(this.suitePattern)]],
    street : ['',Validators.required],
    city : ['',Validators.required],
    state : ['',Validators.required],
    country : ['',Validators.required],
    zip : ['',[Validators.required , Validators.pattern(this.zipcodePattern)]],
    passwordGroup: this.passwordGroup

  });
}

onClickRegister(){
var user = {
  user_firstname: this.registerForm.get('firstname').value,
  user_lastname: this.registerForm.get('lastname').value,
  user_password: this.passwordGroup.get('password').value,
  user_email: this.registerForm.get('emailid').value,
  user_phone: this.registerForm.get('phone').value,
  user_suite: this.registerForm.get('suite').value,
  user_street: this.registerForm.get('street').value,
  user_city: this.registerForm.get('city').value,
  user_state: this.registerForm.get('state').value,
  user_country: this.registerForm.get('country').value,
  user_zip: this.registerForm.get('zip').value
}

this.restService.createUser(user).subscribe((response) => {
  console.log(response);
  this.showDetails(user); 
  //alert("Registration Successful");
    //this.router.navigate(['login']);
  
});
}

showDetails(user : any) : void {
  this.dialog.open(DialogComponent, {
    data: user ,width : '250px'
  });
}

}



