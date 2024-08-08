import { inject, Injectable} from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient} from '@angular/common/http';
import {  Observable } from 'rxjs';
import { User } from '../../../shared/models/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);
  router = inject( Router )

  login(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, user)
  }
}