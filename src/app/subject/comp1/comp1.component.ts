import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/service/subject.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {


  name :any;
  constructor(private subjectService:SubjectService) { }

  ngOnInit(): void {
    this.subjectService.sub.subscribe(res =>{
   this.name = res
    })
  }

  sendData(data:any){
    this.subjectService.sub.next(data.value);
  }

}
