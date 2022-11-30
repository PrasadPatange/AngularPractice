import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  parent = {
    parent : true
  }

  userName : string = "Data from Parent";
  childData:any;
  constructor() { }

  ngOnInit(): void {
  }

  parentMethod(data:any){
   this.childData = data;
  }
}
