import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/service/subject.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  name:any;
  constructor(private subjectService:SubjectService) { }

  ngOnInit(): void {
    this.subjectService.sub.subscribe(res=>{
      this.name = res;
    })
  }

  sendData(name:any){
    console.log(name.value);
    this.subjectService.sub.next(name.value);
  }

}
