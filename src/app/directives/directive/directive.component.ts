import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {


  public showBox:boolean = true;
 
  public nameArr = ['Prasad','Rohan','Virat'];

  public day = new Date().getDay();

  public num: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log("Day In Number : ",this.day);
  }

  attr ={
    background:true
  }
  toggle(){
     this.showBox = !this.showBox;
  }
}
