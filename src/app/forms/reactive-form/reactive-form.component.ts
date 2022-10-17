import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


  userForm!: FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
   this.form();
  }
  
  form(){
    this.userForm =  this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
      addDynamicEle : this.fb.array([])
    })

    // setValue() : 
    // this.userForm.setValue({
    //   name:'prasad',
    //   email: 'prasad@gmail.com',
    //   // password: 'prasad@123' //give error
    // });
    
    // patchValue() :
    // this.userForm.patchValue({
    //   name:'prasad',
    //   email: 'prasad@gmail.com',
    //   // password: 'prasad@123'
    // });
  }

  get formControls(){
    return this.userForm.controls;
  }

  // Add Dynamic Element 
  get addDynamic(){
    return this.userForm.get('addDynamicEle') as FormArray;
  }

  enable:boolean = false;
  
  add(){
    console.log(this.addDynamic.length )
    if(this.addDynamic.length == 5){
      this.enable = true;
    }
    else if(this.addDynamic.length <= 5){
      this.enable;
      this.addDynamic.push(new FormControl(''));
       }
  }


  remove(){
      this.addDynamic.removeAt(this.fb.array([]).length - 1);
      // console.log(this.addDynamic.length )
  }


  submit(){
  console.log("Form Data : ",this.userForm.value);
  // this.userForm.reset();
  }

}
