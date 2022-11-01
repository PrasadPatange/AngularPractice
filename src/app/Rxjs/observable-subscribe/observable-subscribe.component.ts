import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { count, debounceTime, distinct, elementAt, filter, first, from, fromEvent, interval, last, max, min, Observable, of, skip, take, takeLast, takeWhile } from 'rxjs';

@Component({
  selector: 'app-observable-subscribe',
  templateUrl: './observable-subscribe.component.html',
  styleUrls: ['./observable-subscribe.component.css']
})
export class ObservableSubscribeComponent implements OnInit {

  // Obsrvable :  
  agents!: Observable<string>;
  agentName! : string;

  // Of Operator => create Observable : 
  //Using Array : 
  studentList = ['prasad','sayali','gajanan'];
  students : Observable<string[]> = of(this.studentList);
  // Using String : 
  studentName : Observable<string> = of("Ram");
  // Using Object :
  studentObj = {
    id: 10,
    name : "Prasad"
  }
  student$ : Observable<any> = of(this.studentObj);

  // from Operator : 
  orderArr = ['Fashion','Electronics','Mobile'];
  order$ : Observable<string> = from(this.orderArr);

  // fromEvent Operator : 
  @ViewChild('validate')
  validate!: ElementRef;

  @ViewChild('getlink')
  getlinkData!: ElementRef;

  //  interval Operator :
   shop$ : Observable<string> = from(['mobile','food','cloth']);

  //  debounceTime Operator :
  searchForm! : FormGroup;

  //  takeLast Operator :
  // categories = ['Mobile','TV','Chargers','Headphones'];

  // distinct Operator :
  categories = ['Mobile','TV','Chargers','Headphones','Mobile','TV',];
  category$ : Observable<string>= from(this.categories);

  // max |min Operator : 
  ranks = [10,12,5,6,3,87,67,34];
  rank$ : Observable<number> = from(this.ranks);

  // example  : 
  example = [12,5,4,33,87,10,12,5,6,3,87,67,34];
  example$ : Observable<number> = from(this.example);

  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    
    // ***** Observable : *****
    this.agents = new Observable(
      function(observer){
        try{
            observer.next("Ram");
            observer.next("Prasad");
            observer.next("Gajanan");
            
            // observer.next("Ram");
            // setInterval(()=>{
            //   observer.next("Prasad");
            // },4000);
            // setInterval(()=>{
            //   observer.next("Gajanan");
            // },6000);

        }
        catch(e){
            observer.error(e);
        }
      }
    );

    console.log("*** Observable : ***");

    this.agents.subscribe(data =>{
      console.log(data);
      this.agentName = data;
    });
    
    // ***** Of Operator :  *****
    console.log("*** Of Operator : ***");

     this.students.subscribe(data => {
      console.log("Array Of Operator : ",data);
     });
  
     this.studentName.subscribe(data =>{
       console.log("string Of Operator : ", data);
     })

     this.student$.subscribe(data =>{
       console.log("Object Of Operator : ", data);
     });

    // ***** from Operator : ******
    console.log("*** from Operator : ***");

    this.order$.subscribe(data => {
      console.log(data);
    });

    // ****** interval Operator :  ******
    console.log("*** interval Operator : ***");

    this.shop$.subscribe((data)=> {
      const Num$ = interval(2000);
      Num$.subscribe((num) => {
        if(num < 5){
          // console.log(data + num);
        }
      });
    });


    //***** debounceTime Operator :  ******
    console.log("*** debounceTime Operator : ***");

    this.searchForm = this.fb.group({
      name : new FormControl('')
    });

    this.searchForm.get("name")?.valueChanges.pipe(

      // *** take Operator : ***
      // take(5), // take N=1,2,3,4,.... values
      
      // *** takeWhile Operator : ***
            //  takeWhile((v) => this.checkCondition(v)), // Take values till a condition is true.

     
      // *** debounceTime Operator : ***
            // debounceTime(3000) // time lag before it emits next value.

      // *** filter Operator ***
      // filter((v) => this.CharCount(v))

    ).subscribe(data => {
      console.log(data);
      
      // **** max Operator ****
      this.rank$.pipe(
        max( )
      ).subscribe((data) => {
        // console.log("Max Value : ",data);
      })

      // **** min Operator ****
      this.rank$.pipe(
        min( )
      ).subscribe((data) => {
        // console.log("Minimum Value : ",data);
      });

      //  *** Example ***
      this.example$.pipe(
        distinct(),
        filter((v) => this.filterValue(v)),
        max()
      ).subscribe(data => {
        console.log("Max Value : ",data);
      })

      // ***** distinct Operator *****
      console.log("*** distinct Operator : ***");
      console.log("*** skip Operator : ***");
      this.category$.pipe(

        // **** distinct Operator ****
        // distinct(),

        // **** skip Operator ****
        // skip(2)  // skip first 2 values

        // **** count Operator ****
        // count()  // count  values

      ).subscribe(data => {
          // console.log(data);
      })

      /* 
      this.category$.pipe(

         // *** takeLast Operator : ***
        //  Whenever you are sure about the data set, you need specific last emitted values. => use takeLast(n)
        //  takeLast(2), // Take Last N= 1,2,3,4,5,..... values      Chargers, Headphones

        // *** first Operator ***
        // first()  // Mobile

        // *** last Operator ***
        // last()  // Headphones

        // *** elementAt Operator ***
        // elementAt(1)   // TV

      ).subscribe(category =>{
        console.log(category);
      }) 
      */
    })
  }
 

  // ***** fromEvent Operator : *****
  rxJsEventObservable(){
     const btnObservable$ = fromEvent(this.validate?.nativeElement,'click');
    //  console.log(btnObservable$);
     btnObservable$.subscribe((data)=>{
      console.log("fromEvent Operator : ",data);
     })
  }

  getEventObservable(){
    const linkObservable$ = fromEvent(this.getlinkData?.nativeElement,'mouseover');
    //  console.log(linkObservable$);
    linkObservable$.subscribe((data)=>{
      console.log("fromEvent Operator : ",data);
     })
  }


  // ***** debounceTime Operator *****
  readValue(){
    
  }
  
  // ***** takeWhile Operator *****
  checkCondition(value: string | any[]){
    return value.length > 5 ? false : true;
  } 

  // ****** filter Operator ******
  CharCount(v: string | any[]){
    return v.length < 10 ? true : false;
  }

  // ******* Example *********
  filterValue(v: number){
    return v > 10 ? true : false;
  }
}

