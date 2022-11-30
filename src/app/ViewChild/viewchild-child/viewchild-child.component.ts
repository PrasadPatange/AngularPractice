import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchild-child',
  templateUrl: './viewchild-child.component.html',
  styleUrls: ['./viewchild-child.component.css']
})
export class ViewchildChildComponent implements OnInit {


  public counter : number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }
}
