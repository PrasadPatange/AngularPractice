import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TDFormComponent implements OnInit {

  countryList = ['India','US','UK'];
  user:any;
  constructor() { }

  ngOnInit(): void {
    this.user = {
      fname:'testUser',
      lname:'surname',
      address:{
        city:'Mumbai'
      }
    }
  }

  onSubmit(data:NgForm){
       console.log(data.value);
       console.log(data);
  }

  resetForm(userForm:NgForm){
    userForm.resetForm(this.user);
  }

}
