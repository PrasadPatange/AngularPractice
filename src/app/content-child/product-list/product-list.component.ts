import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,AfterContentInit {


  @Input() products : any;

  @ContentChild('head') contentHeader! : ElementRef;

  @ContentChildren('head1') header1! : QueryList<any>;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.contentHeader); //undefined
  }

  ngAfterContentInit(): void {

    // ContentChild =>
    console.log(this.contentHeader);
    // this.contentHeader.nativeElement.setAttribute('style','color:red');
    this.contentHeader.nativeElement.style.color = 'red';

    // ContentChildren =>
    console.log(this.header1);
    this.header1.first.nativeElement.style.color = 'navy';
    this.header1.last.nativeElement.style.color = 'yellow';
       
  }

}
