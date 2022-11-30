import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { SubjectService } from '../service/subject.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private loaderService : SubjectService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const Token = "Fake Dummy Token For Testing $gd533bfhi3i3mfm994";
  //   request = request.clone({
  //     setHeaders:{
  //             Authorization : "Bearer " + Token
  //     }
  //   });
  //   return next.handle(request);



  
  this.loaderService.isLoading.next(true);
  return next.handle(request).pipe(
    finalize(
      () =>{
        this.loaderService.isLoading.next(false);
      }
    )
  )
    }
}
