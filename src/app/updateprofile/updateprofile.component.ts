import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { DatasharingService } from '../datasharing.service';
import { AbstractControl, FormGroupDirective, FormBuilder, FormControl, Validators ,FormsModule,NgForm, FormGroup } from '@angular/forms';
import { RegistrationValidator } from '../register/register.validator';


@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

    productId: String;
    id: String;
    userId: String;
    quantity: String;
    productInfo: any;
    source: any;
    isUserLoggedIn: boolean;
    reviewList:any;
    product:any;
    updateForm: FormGroup;
    passwordGroup: FormGroup;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  //passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  passwordPattern = "^[a-zA-Z0-9?=.*?[#?!@$%^&*-]{8,}$$";
  phonePattern = "^[0-9]{10}$";
  suitePattern = "^[0-9]{1,5}$";
  zipcodePattern = "[ABCEGHJKLMNPRSTVXY abceghjklmnprstvxy][0-9][ABCEGHJKLMNPRSTVWXYZ abceghjklmnprstvxy] ?[0-9][ABCEGHJKLMNPRSTVWXYZ abceghjklmnprstvxy][0-9]"
  
  
  
    constructor(private formBuilder: FormBuilder, private restService: RestService, private router: Router,private localStorageService: LocalStorageService) {}
    
  
    ngOnInit() {
      this.passwordGroup = this.formBuilder.group({
        password:  ['', [Validators.required,  Validators.pattern(this.passwordPattern) ]],
        reenterpassword:   ['',  Validators.required],
      }, {
        validator: RegistrationValidator.validate.bind(this)
      });
    
    
      this.updateForm = this.formBuilder.group({
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
      this.source = this.localStorageService.get('user_object');
      this.id = this.source.user_id;

      if(!this.source){
        alert("Please login to provide feedback")
        this.router.navigate(['/login'], { preserveQueryParams: true });

      }
    }
  
    // Product(id){
    // this.restService.getProduct(id).subscribe((response) => {
    // this.product = response;
    // console.log(this.product);
    // });
    // }
    onClickRegister(){
      var user = {
        user_firstname: this.updateForm.get('firstname').value,
        user_lastname: this.updateForm.get('lastname').value,
        user_password: this.passwordGroup.get('password').value,
        user_email: this.updateForm.get('emailid').value,
        user_phone: this.updateForm.get('phone').value,
        user_suite: this.updateForm.get('suite').value,
        user_street: this.updateForm.get('street').value,
        user_city: this.updateForm.get('city').value,
        user_state: this.updateForm.get('state').value,
        user_country: this.updateForm.get('country').value,
        user_zip: this.updateForm.get('zip').value,
        user_id: this.id
      }
      
      this.restService.updateUser(user).subscribe((response) => {
        console.log(response);
        
        alert("Update Successful");
        this.restService.getUserbyID(this.id).subscribe((response: Response) => {
          this.source = response;
          this.localStorageService.set('user_object', this.source);


        });
          this.router.navigate(['home']);
        
      });
      }
   
  }