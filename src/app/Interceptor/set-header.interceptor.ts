import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SetHeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    // For Intercept Request => 
    console.log("Interceptor => ",request);

    const API_KEY = "Test123";
    const req = request.clone({
      setHeaders: {
        API_KEY,
      }
    })
    return next.handle(req);
  }
}
