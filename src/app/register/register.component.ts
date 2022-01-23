import { Component, OnInit } from '@angular/core';
import { AuthService } from '../AuthApi/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regUserData : any = {};

  constructor( private _auth:AuthService,
               private _router:Router) { }

  ngOnInit(): void {
  }
  registerUser(){
      this._auth.registerUser(this.regUserData)
       .subscribe(
         res => {
          localStorage.setItem('token', res.token)
          this._router.navigate(['/cart'])
           console.log(res)
         },
         err => console.log(err)
       )
      console.log(this.regUserData)
    }
}
