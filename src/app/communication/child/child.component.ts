import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {



  @Input() sendDataToChild:any;
  @Output() sentDataToParent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  passChildToParent(name:any){
    this.sentDataToParent.emit(name.value);
  }
}
