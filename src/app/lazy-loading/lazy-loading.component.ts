import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.css']
})
export class LazyLoadingComponent implements OnInit {

  userArr:any;
  constructor(private apiService:ApiService,public loaderService:SubjectService) {
   }

  ngOnInit(): void {
    setTimeout(() => {
      this.apiService.getAllUserData().subscribe({
        next:(data:any)=>{
        
          this.userArr = data;
        },
        error:(err)=>{
          console.log("Error : ",err.message);
        }
      });

    }, 3000);
  }

}
