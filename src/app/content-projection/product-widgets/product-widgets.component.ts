import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-widgets',
  templateUrl: './product-widgets.component.html',
  styleUrls: ['./product-widgets.component.css']
})
export class ProductWidgetsComponent implements OnInit {

  @Input() products : any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
