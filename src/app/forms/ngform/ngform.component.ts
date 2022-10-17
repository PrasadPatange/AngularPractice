import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngform',
  templateUrl: './ngform.component.html',
  styleUrls: ['./ngform.component.css']
})
export class NgformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Register(regForm:any){
    console.log(regForm);
    console.log(regForm.value);
  }
}
