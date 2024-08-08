import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

export const loginInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {

  const storage = inject( StorageService );

  return next( req ).pipe( tap( ( response: any ) => {
      if( response.ok && response.url.startsWith(`${environment.apiUrl}/login`)){

        storage.setToken( response.body.accessToken );
        storage.setUserId( response.body.user.id );

      }
    }
  ));
};
