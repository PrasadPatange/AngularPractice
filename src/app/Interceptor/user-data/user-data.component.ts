import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
 

  userArr:any;

  constructor(private apiService :ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllUserData().subscribe(res => {
      this.userArr = res;
    })
  }

}
