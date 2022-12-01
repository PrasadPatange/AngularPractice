import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Product } from '../product';

@Component({
  selector: 'app-hook-child',
  templateUrl: './hook-child.component.html',
  styleUrls: ['./hook-child.component.css']
})
export class HookChildComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  @Input() child : any;
  // @Input() childProduct!: Product;

  @ContentChild('child') contentChild! : ElementRef;
  @ViewChild('childhook') viewChild! :ElementRef;

  counter = 0;
  interval : any;

  // ngOnChanges() not called for childProduct (Object) because during change detection , when angular checks 
  // components input properties for change,it uses (essentially) === for dirty checking.

  // For Arrays / Objects, this means the references (only) are dirty checked. Since the childProduct array reference isn't
  // changing , ngOnChanges() will not be Called.

  // To Handle this use ngDoCheck() Hook

  constructor(public apiService : ApiService) {
    // Constructor used In Angular for Dependency Injection. 
    console.log("1 Constructor() Called  => ");
   }

  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // If we want to initialize some data or business logic as soon as component Initialized then put inside 
    // ngOnInit()

    this.apiService.getAllUserData().subscribe(res=>{
      // console.log(res);
    });

    console.log('2 ngOnInit() Called => ');

    // this.interval = setInterval(()=>{
    //       this.counter++;
    //       console.log("Counter = ",this.counter)
    // },1000)

  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("ngOnChanges() Called => : ", changes)
    // This hooks gives currentValue and previousValue
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    // console.log("ngDoCheck() Called => ",this.childProduct);
    console.log("3 ngDoCheck() Called => ");
  }


  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("4 ngAfterContentInit() Called => ");
    this.contentChild.nativeElement.setAttribute("style",`color:${this.child}`);  // not change bcoz called only once
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("5 ngAfterContentChecked() Called => ");
    this.contentChild.nativeElement.setAttribute("style",`color:${this.child}`); // called
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("6 ngAfterViewInit() => ");
    this.viewChild.nativeElement.setAttribute("style",`background-color:${this.child}`)
  }
  
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("7 ngAfterViewChecked() => ");
    this.viewChild.nativeElement.setAttribute("style",`background-color:${this.child}`);
    console.log("------------------------------------");
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("8 ngOnDestroy() => ")
    // clearInterval(this.interval);
  }
}
