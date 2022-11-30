import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-sub-vs-bsub',
  templateUrl: './sub-vs-bsub.component.html',
  styleUrls: ['./sub-vs-bsub.component.css']
})
export class SubVsBsubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  
    console.log("*** Subject VS BehaviorSubject ***");
    // Subject :
    const subject = new Subject();
    subject.subscribe(d => console.log(`subject Subscriber 1 : ${d}`));
    subject.next(2020);
    subject.subscribe(d => console.log(`subject Subscriber 2 : ${d}`)); //return nothing

    // BehaviorSubject :
     const bSubject = new BehaviorSubject<number>(12);
     bSubject.subscribe(d => console.log(`BehaviorSubject Subscriber 1 : ${d}`));
     bSubject.next(200);
     bSubject.subscribe(d => console.log(`BehaviorSubject Subscriber 2 : ${d}`));

  }

}
