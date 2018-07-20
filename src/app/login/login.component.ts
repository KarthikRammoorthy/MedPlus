import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private restService: RestService) { }
  username: String;
  password: String;
  errorMessage: String;

  ngOnInit() {
  }

  login() {
    this.restService.login().subscribe((response) => {
      console.log(response);
    });
  }

}
