import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-hook-parent',
  templateUrl: './hook-parent.component.html',
  styleUrls: ['./hook-parent.component.css']
})
export class HookParentComponent implements OnInit {

  parent :any = 'red';
  name!: string;
  price!: number;
  product : Product = new Product(); // pass Object to Child

  constructor() { }

  ngOnInit(): void {
  }

  parentData(e : any){
 this.parent = e.target.value;
  }

  updateProduct(){
    // this.product = new Product();  // it update reference also so ngOnchanges Call when Object Update
    this.product.name = this.name;
    this.product.price = this.price;
  }
}
