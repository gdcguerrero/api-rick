import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import StorageHelper from '../helpers/storage.helper';
import { catchError, Observable, switchMap, throwError } from 'rxjs';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(private service: ApiService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('/mirror/')) {
      let originalRequest = request
      request = request.clone(
        {
          setHeaders: {
            Authorization: 'Beader ' + StorageHelper.getItem('session').token
          }
        }
      )
      return next.handle(request).pipe(
        catchError( (err:any) => {
          if (err instanceof HttpErrorResponse && err.status === 401) {
            return this.expiredHandler(originalRequest, next)
          }
          return throwError(() => err)
        })
      )
    }
    return next.handle(request)
  }

  private expiredHandler(originalRequest: HttpRequest<unknown>, next: HttpHandler ){
    return this.service.token().pipe(
      switchMap( (resp) => {
        StorageHelper.setItem('session', resp)
        originalRequest = originalRequest.clone(
          {
            setHeaders: {
              Authorization: 'Beader ' + StorageHelper.getItem('session').token
            }
          }
        )
        return next.handle(originalRequest)
      })
    )
  }
}