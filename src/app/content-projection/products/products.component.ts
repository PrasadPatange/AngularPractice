import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  saleProducts:any [] = [
    {
      id:1,
      name:'TV',
      price:5000
    },
    {
      id:2,
      name:'Phone',
      price:2000
    },
    {
      id:3,
      name:'Laptop',
      price:10000
    },
  ]
  TopProducts:any [] = [
    {
      id:1,
      name:'Mobile',
      price:15000
    },
    {
      id:2,
      name:'Watch',
      price:5000
    },
    {
      id:3,
      name:'Toaster',
      price:2000
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
