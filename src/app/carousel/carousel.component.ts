import { Component, OnInit } from '@angular/core';

import { MainApiService } from '../service/main-api.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carousels:any = [];
  carousel:any= [
    {
      "id": 1,
      "name": "Carousel-1",
      "imageUrl": "assets/img/car1.png",
      "desc": "Science Ends in Philosophy"
    },
    {
      "id": 2,
      "name": "Carousel-2",
      "imageUrl": "assets/img/car2.png",
      "desc": "Oxygen, atomic number - 16"
    },
    {
      "id": 3,
      "name": "Carousel-3",
      "imageUrl": "assets/img/car3.png",
      "desc": "Atom"
    }
  ];
  constructor(
    private mainApi:MainApiService
  ) { }

  ngOnInit(): void {
    this.mainApi.getCarousel().subscribe(
      (data:any=[])=>{
        this.carousels = data;
      }
    )
  }

}
