import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // For Intercept Response =>
    const startTime = (new Date()).getTime();
    return next.handle(request).pipe(
      map(event => {
        if(event instanceof HttpResponse){
          
          const endTime = (new Date()).getTime();
          const difference = endTime - startTime;
          // console.log(event.url + ' Succeed In '+ difference + " Milliseconds");

        }
          return event;
        })
        )
      }
    }
