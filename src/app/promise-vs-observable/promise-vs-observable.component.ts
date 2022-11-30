import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-promise-vs-observable',
  templateUrl: './promise-vs-observable.component.html',
  styleUrls: ['./promise-vs-observable.component.css']
})
export class PromiseVsObservableComponent implements OnInit, OnDestroy{


  subscription!: Subscription;

  constructor() { }

  ngOnInit(): void {

    // Promise
    const promise = new Promise((resolve)=>{
      // ( Eager in Nature ) => promise return as soon as we create it.
      console.log("Promise called...");
      setTimeout(() => {
        resolve("promise resolved");
        // promise return only single value => 
        // resolve("promise resolved 1");
        // resolve("promise resolved 2");
        // resolve("promise resolved 3");
      }, 1000);
    });

    //return
    promise.then(result => console.log(result));
    
    // Observable 
    // const obs = new Observable((subscriber)=>{
    //   // ( lazy in Nature ) => not return any value until we subscribe them.
    //     console.log("Observable called...");
    //     setTimeout(() => {
    //       subscriber.next('observable working');
    //       // obeservable return multiple values =>
    //       subscriber.next('observable working 1');
    //       subscriber.next('observable working 2');
    //       subscriber.next('observable working 3');
    //     }, 1000);
    //   });
    // return 
    // obs.pipe(
    //       // observable uses rxjs operator =>
    //       filter(d => d === "observable working 1")

    // ).subscribe(result => console.log(result));
 
    let counter = 0;
    const obs = new Observable((subscriber)=>{
                setInterval(()=>{
                  counter++;
                  subscriber.next(`Counter => ${counter}`)
                },1000);
      });

       // return  
      // observable can be unsubscribe or stop =>
         this.subscription = obs.subscribe(result => console.log(result))
  }


  ngOnDestroy(): void {
    // observable can be unsubscribe or stop =>
      this.subscription.unsubscribe();
  }
    
}
