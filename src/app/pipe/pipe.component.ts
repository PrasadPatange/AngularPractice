import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  title:string = "pipes in angular";
  users:any[]=[
    {
      id:101,
      name:"PRASAD",
      city:"virar",
      salary:2,
      dob:new Date("05/10/1999")
    },
    {
      id:102,
      name:"ROHAN",
      city:"vasai",
      salary:12000,
      dob:new Date("10/04/1990")
    },
    {
      id:101,
      name:"SAYALI",
      city:"mumbai",
      salary:19000,
      dob:new Date("12/02/1995")
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
