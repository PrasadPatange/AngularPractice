import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replaysubject',
  templateUrl: './replaysubject.component.html',
  styleUrls: ['./replaysubject.component.css']
})
export class ReplaysubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("*** Replay Subject ***")
    
    // ReplaySubject => 
    // It Emits or buffer old values and emit those values to new subscribers.

    const rSubject = new ReplaySubject<string>(2); //buffer last 2 values
    rSubject.next("first");
    rSubject.next("second");
    rSubject.next("third");
    rSubject.next(" forth ");

    // Subscriber 1 :
    rSubject.subscribe(d => console.log(`replaySubject Subscriber 1 : ${d}`));

    rSubject.next("fifth");
    rSubject.next(" six ");

     // Subscriber 2 :
     rSubject.subscribe(d => console.log(`replaySubject Subscriber 2 : ${d}`));
  }

  

}
