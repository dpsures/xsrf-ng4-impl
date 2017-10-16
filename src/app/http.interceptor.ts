import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { CookieService } from "ngx-cookie-service";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  cookieValue : string = "";

  constructor(private _cookie : CookieService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });

    this._cookie.set("CSRF-TOKEN", "1452369874563211014785252211455");

    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        console.log('response triggered');
        this.cookieValue = this._cookie.get('CSRF-TOKEN');
        console.log('cookievalue --->'+this.cookieValue);
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          console.log('401 error triggered');
        } else {
          console.log('all error triggered');
        }
      }
    });
  }
}