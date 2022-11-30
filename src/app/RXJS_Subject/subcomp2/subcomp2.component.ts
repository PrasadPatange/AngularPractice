import { Component, OnInit } from '@angular/core';
import { SubService } from '../sub.service';

@Component({
  selector: 'app-subcomp2',
  templateUrl: './subcomp2.component.html',
  styleUrls: ['./subcomp2.component.css']
})
export class Subcomp2Component implements OnInit {

  notificationMessage! : string;
  constructor(private subService : SubService) { }

  ngOnInit(): void {
    this.subService.notificationSubject.subscribe(d => {
      this.notificationMessage = d;
    })
  }

}
