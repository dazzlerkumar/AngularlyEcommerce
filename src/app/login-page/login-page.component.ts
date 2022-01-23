import { Component, OnInit } from '@angular/core';
import { AuthService } from '../AuthApi/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  logUserData:any={}
  constructor(private _auth:AuthService,
              private _router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._auth.loginUser(this.logUserData);
    console.log(this.logUserData);
  }
}
