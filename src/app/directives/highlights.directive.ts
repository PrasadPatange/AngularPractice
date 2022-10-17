import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  constructor(private ele: ElementRef) { 
    console.log(ele.nativeElement.value);
    ele.nativeElement.style.border = "2px dotted red";
    ele.nativeElement.style.borderRadius = "20px";
    ele.nativeElement.style.height = "150px";
  }

  //HostBinding
  @HostBinding('style.backgroundColor') bgColor = "black";
  @HostBinding('style.Color') Color = "white";

  // HostListener
  @HostListener('mouseover') onMouseOver(){
    // this.ele.nativeElement.style.color = "yellow";
    // this.ele.nativeElement.style.backgroundColor = "navy";
    this.bgColor = "navy";
    this.Color = "yellow";
  }
  
  @HostListener('mouseout') onMouseOut(){
    // this.ele.nativeElement.style.color = "black";
    // this.ele.nativeElement.style.backgroundColor = "white";
    this.bgColor = "yellow";
    this.Color = "navy";
  }
}
