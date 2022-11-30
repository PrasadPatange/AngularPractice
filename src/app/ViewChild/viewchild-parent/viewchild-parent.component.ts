import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ViewchildChildComponent } from '../viewchild-child/viewchild-child.component';

@Component({
  selector: 'app-viewchild-parent',
  templateUrl: './viewchild-parent.component.html',
  styleUrls: ['./viewchild-parent.component.css']
})
export class ViewchildParentComponent implements OnInit,AfterViewInit {

  @ViewChild('highlight') text! : ElementRef;
  @ViewChildren('highlight1') text1! : QueryList<any>;
 
  // Child Componant : 
  @ViewChild('child') child! : ViewchildChildComponent;

  constructor() { 
    // console.log(this.text)  //undefined
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    // ViewChild
    console.log(this.text);
    this.text.nativeElement.style.color = 'red'; 

    // ViewChildren
    console.log(this.text1)
    console.log(this.text1.length)
    this.text1.first.nativeElement.style.color = 'navy';
    this.text1.last.nativeElement.style.color = 'yellow';
    
    // Child Component
    console.log(this.child)
  }

  incr(){
    this.child.increment();
  }
  decr(){
    this.child.decrement();
  }
}
