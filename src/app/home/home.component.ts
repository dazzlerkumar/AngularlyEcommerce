import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { DataService } from '../data.service';
import { MainApiService } from '../service/main-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any = [];
  productImg: any = [];
  userData: any = [];
  creatorName: string = '';
  productsObj: any;
  product:any= [
    {
      "id": 1,
      "name": "Licensed Cotton Cheese",
      "price": "188.00",
      "mainImg":"assets/img/productimg.jpg",
      "imageUrl": [
        "assets/img/productimg.jpg",
        "assets/img/minipic1.png",
        "assets/img/minipic2.png",
        "assets/img/minipic3.png",
        "assets/img/minipic4.png"
      ],
      "quantity": 71747,
      "colors": [
        "Blue",
        "Yellow",
        "Red",
        "Green"
      ],
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    {
      "id": 2,
      "name": "Small Cotton Bike",
      "price": "714.00",
      "mainImg":"assets/img/featureimg.png",
      "imageUrl": [
        "assets/img/productimg.jpg",
        "assets/img/minipic1.png",
        "assets/img/minipic2.png",
        "assets/img/minipic3.png",
        "assets/img/minipic4.png"
      ],
      "quantity": 65477,
      "colors": [
        "Blue",
        "Yellow",
        "Red"
      ],
      "sizes": [
        "XS",
        "S",
        "M",
        "L"
      ]
    },
    {
      "id": 3,
      "name": "Small Metal Tuna",
      "price": "579.00",
      "mainImg":"assets/img/featureimg.png",
      "imageUrl": "assets/img/productimg.jpg",
      "quantity": 52224,
      "colors": [
        "Teal",
        "Magenta",
        "Red"
      ],
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL"
      ]
    },
    {
      "id": 4,
      "name": "Refined Fresh Keyboard",
      "price": "283.00",
      "mainImg":"assets/img/productimg.jpg",
      "imageUrl": "assets/img/featureimg.png",
      "quantity": 38687
    },
    {
      "id": 5,
      "name": "Refined Fresh Sausages",
      "price": "854.00",
      "mainImg":"assets/img/featureimg.png",
      "imageUrl": "assets/img/featureimg.png",
      "quantity": 26904
    },
    {
      "id": 6,
      "name": "Ergonomic Frozen Tuna",
      "price": "291.00",
      "mainImg":"assets/img/productimg.jpg",
      "imageUrl": "assets/img/featureimg.png",
      "quantity": 79850
    },
    {
      "id": 7,
      "name": "Sleek Steel Keyboard",
      "price": "682.00",
      "mainImg":"assets/img/featureimg.png",
      "imageUrl": "assets/img/productimg.jpg",
      "quantity": 15271
    },
    {
      "id": 8,
      "name": "Practical Frozen Computer",
      "price": "793.00",
      "mainImg":"assets/img/productimg.jpg",
      "imageUrl": "assets/img/featureimg.png",
      "quantity": 12161
    },
    {
      "id": 9,
      "name": "Gorgeous Metal Keyboard",
      "price": "28.00",
      "mainImg":"assets/img/productimg.jpg",
      "imageUrl": "assets/img/productimg.jpg",
      "quantity": 70431
    },
    {
      "id": 10,
      "name": "Refined Steel Chicken",
      "price": "296.00",
      "mainImg":"assets/img/productimg.jpg",
      "imageUrl": "assets/img/productimg.jpg",
      "quantity": 74692
    },
    {
      "id": 11,
      "name": "Gorgeous Granite Tuna",
      "price": "156.00",
      "mainImg":"assets/img/featureimg.png",
      "imageUrl": "assets/img/featureimg.png",
      "quantity": 75001
    },
    {
      "id": 12,
      "name": "Refined Fresh Hat",
      "price": "87.00",
      "mainImg":"assets/img/productimg.jpg",
      "imageUrl": "assets/img/productimg.jpg",
      "quantity": 92020
    },
    {
      "id": 13,
      "name": "Generic Steel Gloves",
      "price": "305.00",
      "mainImg":"assets/img/productimg.jpg",
      "imageUrl": "assets/img/productimg.jpg",
      "quantity": 32511
    },
    {
      "id": 14,
      "name": "Small Concrete Fish",
      "price": "636.00",
      "mainImg":"assets/img/productimg.jpg",
      "imageUrl": "assets/img/featureimg.png",
      "quantity": 58293
    },
    {
      "id": 15,
      "name": "Ergonomic Cotton Shoes",
      "price": "15.00",
      "mainImg":"assets/img/featureimg.png",
      "imageUrl": "assets/img/productimg.jpg",
      "quantity": 71618
    },
    {
      "id": 16,
      "name": "Rustic Cotton Pants",
      "price": "85.00",
      "mainImg":"assets/img/productimg.jpg",
      "imageUrl": "assets/img/featureimg.png",
      "quantity": 89247
    },
    {
      "id": 17,
      "name": "Sleek Concrete Gloves",
      "price": "315.00",
      "mainImg":"assets/img/featureimg.png",
      "imageUrl": "assets/img/productimg.jpg",
      "quantity": 43338
    },
    {
      "id": 18,
      "name": "Awesome Plastic Soap",
      "price": "568.00",
      "mainImg":"assets/img/productimg.jpg",
      "imageUrl": "assets/img/featureimg.png",
      "quantity": 98974
    },
    {
      "id": 19,
      "name": "Incredible Soft Pizza",
      "price": "986.00",
      "mainImg":"assets/img/productimg.jpg",
      "imageUrl": "assets/img/productimg.jpg",
      "quantity": 72525
    },
    {
      "id": 20,
      "name": "Licensed Rubber Table",
      "price": "366.00",
      "mainImg":"assets/img/productimg.jpg",
      "imageUrl": "assets/img/featureimg.png",
      "quantity": 59587
    }
    
  ]

  constructor(private mainApi: MainApiService,
    private dataservice: DataService,
    private router: Router) { }

  ngOnInit() {
    this.mainApi.getProducts().subscribe(
      (data: any) => {
        this.products = data;
        for (var i = 0; i <= this.products.price.length - 1; i++) {
          this.productsObj[i] = this.products.price[i];
        }

      }
    )
  }
  productDetails(id: number): void {
    this.router.navigate(['/product-page'], { queryParams: { id: id } });
  }
  sortBy(event: any) {
    var filterValue = event.target.value;
    switch (filterValue) {
      case 'featured': ''; break;
      case 'l': console.log(this.productsObj); break;
      case 'h': ''; break;
      case 'a': ''; break;
      case 'z': ''; break;


    }

  }
}
