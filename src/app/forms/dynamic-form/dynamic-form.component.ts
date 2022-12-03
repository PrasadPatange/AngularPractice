import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  public formData: any[] = [
    {
      label: 'name',
      type: 'text',
    },
    {
      label: 'email',
      type: 'text',
    },
    {
      label: 'password',
      type: 'password',
    },
  ];

  address: boolean = false;

  public userForm!: FormGroup;

  public data: any;
  constructor(public fb: FormBuilder) {}

  public ngOnInit(): void {
    this.createDynamicForm(this.formData,this.address);
  }

  private createDynamicForm(formData: any[], address: boolean): void {

    let form :any = {};


     // If user locates from a specific location.
    // this.address = true
    if (this.address) {
      formData.push({ label: 'Address', type: 'text' });
    }

    // for all users
    // this.formData.forEach((data, i) => {
      //   console.log(i, data);
      //   form[this.formData[i].label] = new FormControl('', [Validators.required]);
      // });

      for (let i = 0; i < formData.length; i++) {
        form[formData[i].label] = new FormControl('', Validators.required);
      }
    this.userForm = this.fb.group(form);
    console.log(this.userForm.value);
  }

  public submit(): void {
    if (this.userForm.valid) {
      this.data = this.userForm.value;
      console.log(this.data);
    }
  }
}




