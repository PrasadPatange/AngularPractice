import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubService {
  
  // Subject =>
  // public notificationSubject = new Subject<string>();

  // BehaviorSubject =>
  public notificationSubject = new BehaviorSubject<string>('Greeting From Prasad');

  constructor() { }

  sendNotification(data: string){
    this.notificationSubject.next(data);
  }
}
