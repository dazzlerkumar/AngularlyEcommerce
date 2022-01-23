import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  total: number = 1;
  itemvalue: number = 1;
  price: number = 100;
  subtotal: number = 0;

  constructor() { }

  ngOnInit(): void {

  }
  add() {
    this.itemvalue += 1;
    this.total += 1;
    console.log(this.total);
  }
  subract() {
    this.itemvalue -= 1;
    this.total -= 1;
  }
  subtotalfun(): number {
    return this.subtotal = this.price;
  }

}
