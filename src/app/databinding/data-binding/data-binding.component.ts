import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

// String Interpolation :
  dynName:string = "Prasad"
  name : string = "Pro";
  myName: string = "Prasad Gajanan Patange"
  wifi : boolean = true;

    showFun(){
      this.wifi = !this.wifi;
    }


  myFun(){
    return "Welcome to Coding " + this.dynName;
  }

  Status:boolean = true
  status1 = "Online"
  status2 = "Offline"

  enabled:boolean = true;

  // Class Binding :-
  multiClass={
    class1:true,
    class2:false,
    class3:true
  }

  addBackground ={
    back : true
  }
 
  // Style Binding :-
  multiStyle={
    'background-color':'red',
    'border':'2px solid black',
    'color':'yellow'
  }
  

  // Event Binding :-
  message!: string;

  mssg!:any;
  add(event:any){
   this.mssg = event.target.value;
  }
  onAddToCart(event:any){

    this.message = event.target.value + " Added To Cart";

  }

  buyMsg!:string;
  Buy(event:any){
  this.buyMsg = "Congratulations , " + event.target.value + " Buy Successfully!!!"
  }

  // Template reference / Local reference Variable :-

  Text!:string;

  myClick(text:any){
    this.Text = text.value + " This is Value" 
  }

  // Two Way Data Binding :-
  UName:string = "Two Way Data Binding"
  product:string = "Successfully Buy"

}
