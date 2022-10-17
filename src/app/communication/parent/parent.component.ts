import { Component, ElementRef, OnInit, ViewChild ,AfterViewInit} from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit{

// ViewChild
  @ViewChild('viewcontent') ViewContent!: ElementRef;

  @ViewChild(ViewChildComponent,{static:true}) childContent! : ViewChildComponent;

  parentData:any;
  childData:any;
  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit => ViewChild : ", this.ViewContent);
  }
  
  
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("ngAfterViewInit => ViewChild : ", this.ViewContent);
    console.log("ngAfterViewInit => ViewChild : ", this.ViewContent.nativeElement.innerText);
    console.log("ngAfterViewInit => ViewChild : ", this.ViewContent.nativeElement.innerHTML);
    this.ViewContent.nativeElement.style.color = 'red';
    
    console.log("ngAfterViewInit => ViewChildComponent : ", this.childContent);
    console.log("ngAfterViewInit => ViewChildComponent UserName : ", this.childContent.userName);
  }
  passParentToChild(name:any){
    this.parentData = name.value;
  }

  dataFromChild(data:any){
       this.childData = data;
  }

  // ViewChild
  changeText(){
    this.childContent.userName = "Data Comes From Parent Yup!!!";
  }

  callChild(){
    this.childContent.child();
  }
}
