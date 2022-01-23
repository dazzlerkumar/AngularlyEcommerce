import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//Project Imports
import { AppConfig } from 'src/app/settings/app.config';

@Injectable({
  providedIn: 'root'
})
export class MainApiService {

  private api_products = "http://localhost:3000/products";
  private api_carousel = "http://localhost:3000/carousel";
  private api_product_detail = "http://localhost:3000/products?id=";

  constructor(
    public _appConfig: AppConfig,
    private http: HttpClient,
  ) { }


  // Carousel
  getCarousel(): Observable<any>{
    return this.http.get(this.api_carousel);
  }

  // Products
  getProducts(): Observable<any>{
    const apiURL = `${this._appConfig.apiEndpoint}${this._appConfig.API_PRODUCT_LIST_PATH}`;
    return this.http.get(this.api_products);
    console.log(this._appConfig.apiEndpoint);
  }

  getProductDetails(id: number): Observable<any> {
    return this.http.get<any>(this.api_product_detail + id);
  }

  
}
