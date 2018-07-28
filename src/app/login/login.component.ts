import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { RestService } from '../rest.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private restService: RestService) { }
  username: String;
  password: String;
  errorMessage: String;

  ngOnInit() {
    this.loginForm = new FormGroup({
      useremail: new FormControl('', [Validators.required,
        Validators.pattern('^[0-9]{16}$')]),
        password: new FormControl('', [Validators.required]),
    });
  }

  login(){

  }

}
