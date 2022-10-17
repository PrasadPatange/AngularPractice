import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }

  // sub = new Subject();
  sub = new BehaviorSubject('Loading...');

  // For Loader
  public isLoading : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);


}
