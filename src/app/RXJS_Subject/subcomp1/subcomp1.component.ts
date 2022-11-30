import { Component, OnInit } from '@angular/core';
import { SubService } from '../sub.service';

@Component({
  selector: 'app-subcomp1',
  templateUrl: './subcomp1.component.html',
  styleUrls: ['./subcomp1.component.css']
})
export class Subcomp1Component implements OnInit {

  currentMessage! :string;
  constructor(private subService : SubService) { }

  ngOnInit(): void {
    this.subService.notificationSubject.subscribe(d=>{
      this.currentMessage = d;
    })
  }

  sendMessage(data: any){
    this.subService.sendNotification(data.value);
  }

}
