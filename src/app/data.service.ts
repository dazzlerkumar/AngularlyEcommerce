import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private rest_api = "http://localhost:3000/products";
  private user_data = "http://localhost:3000/users";
  constructor(private httpclient:HttpClient) { }

  public sendGetReq(){
    return this.httpclient.get(this.rest_api);
  }
  public getUserData(){
    return this.httpclient.get(this.user_data);
  }
}
