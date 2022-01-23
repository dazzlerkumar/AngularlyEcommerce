import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


import { DataService } from '../data.service';
import { MainApiService } from '../service/main-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any = [];
  productImg:any=[];
  userData:any =[];
  creatorName:string='';
  productsObj:any;

  constructor(private mainApi:MainApiService,
              private dataservice:DataService,
              private router:Router) { }

  ngOnInit() {
      this.mainApi.getProducts().subscribe(
        (data:any)=>{
          //console.log(data);
          this.products = data;
          console.log(this.products);
          for(var i=0; i<=this.products.price.length-1;i++){
            this.productsObj[i]=this.products.price[i];
          }
        
        }
      )      
  }
  productDetails(id:number): void {
    this.router.navigate(['/product-page'],{queryParams:{id:id}});
  }
  sortBy(event:any){
    var filterValue = event.target.value;
    switch(filterValue){
      case 'featured':'';break;
      case 'l':console.log(this.productsObj);break;
      case 'h':'';break;
      case 'a':'';break;
      case 'z':'';break;


    }

  }
}
