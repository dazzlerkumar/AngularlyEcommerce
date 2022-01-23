import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated = false;
  public token:any;
  public userEmail:any;
  public userFname:any;
  public userLname:any;
  public loggedInStatus = new BehaviorSubject<boolean>(false);
  
  private tokenTimer:any;
  
  constructor( private http:HttpClient,
               private router : Router) { }

  getToken(){
    return localStorage.getItem('token');
  }

  getIsAuth(){
    return this.isAuthenticated;
  }

  registerUser(user : any){
    return this.http.post<any>('', user);
  }

  loginUser(user:any){
    const userData = {userEmail:user.email, userPass: user.password};
    const URL = 'http://localhost:3000/users';
    return this.http.post
      <any>
      (URL, userData).subscribe(
        res=> {
          const token = res.token;
          this.token = token;
          if(token){
            const expiresInDuration = res.expiresIn;
            this.userEmail = res.email;
            this.userFname = res.userFname;
            this.userLname = res.userLname;
            this.isAuthenticated = true;
            this.loggedInStatus.next(true);
            const currTime = new Date();
            const expireTime = new Date(
              currTime.getTime() + expiresInDuration * 1000
            );
              //Save Auth Data
          }

        },
        err =>{
          this.loggedInStatus.next(false);
        }   
      );
  }

  saveAuthData(token: string, expirationDate: Date, Email: string, userFname: string, userLname: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('Email', Email);
    localStorage.setItem('userFname', userFname);
    localStorage.setItem('userLname', userLname);
  }

  getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const custEmail = localStorage.getItem('userEmail');
    const custFname = localStorage.getItem('userFname');
    const custLname = localStorage.getItem('userLname');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userEmail: custEmail,
      userFname: custFname,
      userLname: custLname
    };
  }

  setAuthTimer(duration:number){
    this.tokenTimer = setTimeout(
      ()=>{ this.logoutUser();},
      duration * 1000
    );
  }


  loggedIn(){
    return this.loggedInStatus;
  }

  logoutUser(){
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userFname');
    localStorage.removeItem('userLname');
    this.isAuthenticated = false;
    this.loggedInStatus.next(false);
    clearTimeout(this.tokenTimer);
    this.router.navigate(['/']);
  }

  
}
