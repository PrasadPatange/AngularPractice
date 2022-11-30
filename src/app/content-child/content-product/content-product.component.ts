import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-product',
  templateUrl: './content-product.component.html',
  styleUrls: ['./content-product.component.css']
})
export class ContentProductComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

}
