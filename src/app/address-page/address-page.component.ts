import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-page',
  templateUrl: './address-page.component.html',
  styleUrls: ['./address-page.component.css']
})

export class AddressPageComponent implements OnInit {
  
  select:number=0;
  selectedAdd: string='';
  constructor() { }

  ngOnInit(): void {
  }



  selected(add:string){
    this.select=1;
    this.selectedAdd = add;
  }
  /*
  getStyle(add:string){
    if(add = this.selectedAdd){
      return "linear-gradient(93.07deg, #ff6815 5.62%, #ff4016 93.25%)";
    }
    else{
      return "";
    }
    
  }*/
}
