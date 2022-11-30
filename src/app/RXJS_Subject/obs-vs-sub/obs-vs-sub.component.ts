import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-obs-vs-sub',
  templateUrl: './obs-vs-sub.component.html',
  styleUrls: ['./obs-vs-sub.component.css']
})
export class ObsVsSubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log("*** Obs VS Subject ***")
    // Observable are unicast : 
    const obs$ = new Observable(obj => obj.next(Math.random()));

    // Subscriber 1 :
     obs$.subscribe(sub => console.log(`obs 1  : ${sub}`));   //0.9260432602369397
    // Subscriber 2 :
     obs$.subscribe(sub => console.log(`obs 2  : ${sub}`));   //0.020435725450269393

    // Subject are Multicast :

    const sub$ = new Subject();

    // Subscriber 1 : 
    sub$.subscribe(sub => console.log(`Subject 1 : ${sub}`));  //0.603292627013754 
    // Subscriber 2 : 
    sub$.subscribe(sub => console.log(`Subject 2 : ${sub}`));  //0.603292627013754

    sub$.next(Math.random());

  }

}
