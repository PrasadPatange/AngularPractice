import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  userName:string = "View Child Component Content";

  constructor() { }

  ngOnInit(): void {
  }

  child(){
    alert("Click Using ViewChild Function From Parent Yup!!!");
  }

}
