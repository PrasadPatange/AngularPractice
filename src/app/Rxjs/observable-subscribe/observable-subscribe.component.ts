import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-subscribe',
  templateUrl: './observable-subscribe.component.html',
  styleUrls: ['./observable-subscribe.component.css']
})
export class ObservableSubscribeComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    
  }
  // Create a new Observable that will
// deliver the above sequence
//  table = new Observable(tableOfTwo);

  
// Execute the Observable and print the
// result of each notification
// next() is a call to tableOfTwo() method
// to get the next value from the observable

// table.subscribe({
//     next(num: any) { 
//       console.log(num);
//      },
//     complete() { 
//       console.log('Finished sequence');
//      }
// });

 
// This function runs when subscribe() is called
// function tableOfTwo(observer:any) {
     
//     for(var i = 1; i <= 10; i++) {
//       observer.next('2 * ' + i + ' = ' + i*2);
//     }
     
//     observer.complete();
//     return {
//       unsubscribe(){}
//     };


}

