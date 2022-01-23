import { Component, ElementRef, OnInit, ViewChild, Renderer2, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';


import { MainApiService } from '../service/main-api.service';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { observable } from 'rxjs';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  left_arrow = faChevronLeft;
  right_arrow = faChevronRight;
  productDetail:any;
  productObj:any;
  colorArr:any=[];
  mainImg:any;
  miniImg:any=[];
  sizeArr:any=[];

  @ViewChild('color0', { static: false })color0!: ElementRef;
  @ViewChild('color1', { static: false })color1!: ElementRef;
  @ViewChild('color2', { static: false })color2!: ElementRef;
  @ViewChild('color3', { static: false })color3!: ElementRef;
  @ViewChild('color3', { static: false })color4!: ElementRef;
 // @ViewChild('sizeAvailable', { static: false })sizeAvailable!: ElementRef;
  


  constructor(
    private ActivatedRoute: ActivatedRoute,
    private mainApi: MainApiService,
    private renderer:Renderer2
  ) {

    const pId: number = this.ActivatedRoute.snapshot.queryParams['id'];
    //console.log("from home : "+ pId);
    this.fetchProductInfo(pId);
    
  }

  ngOnInit(): void {  
  }
  addClass(colorid:any){
    switch(colorid){
     case 'color0':this.renderer.setStyle(this.color0.nativeElement, 'box-shadow', '0 0 0 2px #fff, 0 0 0 4px #ff6815');break;
     case 'color1':this.renderer.setStyle(this.color1.nativeElement, 'box-shadow', '0 0 0 2px #fff, 0 0 0 4px #ff6815');break;
     case 'color2':this.renderer.setStyle(this.color2.nativeElement, 'box-shadow', '0 0 0 2px #fff, 0 0 0 4px #ff6815');break;
     case 'color3':this.renderer.setStyle(this.color3.nativeElement, 'box-shadow', '0 0 0 2px #fff, 0 0 0 4px #ff6815');break;
     case 'color4':this.renderer.setStyle(this.color4.nativeElement, 'box-shadow', '0 0 0 2px #fff, 0 0 0 4px #ff6815');break;
     default:;
    }
    
  }
  
  fetchProductInfo(id: number) {
    this.mainApi.getProductDetails(id)
      .subscribe(
        (data: any) => {
         
          this.productDetail = data[0]; 
          //console.log(this.productDetail);
          this.mainImg=this.productDetail.imageUrl[0];
          //USING -1 Because we are storing a string, thus NULL stores at the last place
          for(var i=0; i<=this.productDetail.colors.length-1;i++){
              this.colorArr[i]=this.productDetail.colors[i];
            }
          for(var i=0; i<=this.productDetail.sizes.length-1;i++){
              this.sizeArr[i]=this.productDetail.sizes[i];
          }
          for(var i=0; i<=this.productDetail.imageUrl.length-1;i++){
            this.miniImg[i]=this.productDetail.imageUrl[i];
          }
          
          console.log(this.colorArr);
        }
      );
  }
  imgClick(event:any, Clickedminipic:any){
    this.mainImg=Clickedminipic;
  }
  selectedColor(){
    
  }
}


