import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("*** AsyncSubject ***");
    // AsyncSubject =>
    // => Async Subject only emits a value when it completes.
    // => it will emit its latest/last value to all its observers on completion.

    const aSubject = new AsyncSubject();
    aSubject.next("value 1");
    aSubject.next("value 2");
    aSubject.next("value 3");
    aSubject.complete();
    
    aSubject.subscribe(d => console.log(`User 1 :  ${d}`));
    
    aSubject.next("value 4");
    aSubject.next("value 5");
    // aSubject.complete();
    
    aSubject.subscribe(d => console.log(`User 2 :  ${d}`));
    
    // Real Time Example : 

    console.log("*** AsyncSubject Real Time Example : ***");
    
    const url = "https://jsonplaceholder.typicode.com/users";
    const cache :any = {};
    function getUserInfo(url:any){
        if(!cache[url]){
           // api call using fetch
           cache[url] = new AsyncSubject();
           fetch(url).then(res => res.json()).then(d => {
            cache[url].next(d);
            cache[url].complete();
           })
        }

        return cache[url].asObservable();
    }
    getUserInfo(url).subscribe((d:any) => console.log(d));
    
    setTimeout(() => {
      getUserInfo(url).subscribe((d:any) => console.log(`After 3 seconds :`,d)); // only call once in network
    }, 3000);
  }

}
