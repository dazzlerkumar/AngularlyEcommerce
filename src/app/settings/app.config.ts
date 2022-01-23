import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AppConfig {
    apiEndpoint: string;
    API_REGISTER_PATH: string;
    API_LOGIN_PATH: string;
    API_PRODUCT_LIST_PATH:string;

    constructor() {
        //Main URL
        this.apiEndpoint = 'https://localhost:3000/';

        //Suffixes
        this.API_PRODUCT_LIST_PATH = 'products';
        this.API_REGISTER_PATH = 'register';
        this.API_LOGIN_PATH = 'auth/login';

    }
}