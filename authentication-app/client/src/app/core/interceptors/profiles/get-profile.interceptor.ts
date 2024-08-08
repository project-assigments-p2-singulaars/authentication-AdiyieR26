import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';
import { environment } from '../../../../environments/environment.development';
import { tap } from 'rxjs';
import { User } from '../../../shared/models/login';

export const getProfileInterceptor: HttpInterceptorFn = (req, next) => {

  const storage = inject( StorageService );

  if( req.url.startsWith(`${environment.apiUrl}/users`) ){

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${ storage.getToken() }`
      }
    });

    return next(req).pipe( tap( ( response: any ) => {
      const body = response.body as User;
      delete body?.password;
      return body;
    }) );
  }

  return next(req);
};
