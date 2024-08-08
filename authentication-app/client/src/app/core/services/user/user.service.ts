import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../shared/models/login';
import { StorageService } from '../storage/storage.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  storageService = inject( StorageService );
  http = inject( HttpClient );
  userData = signal<Partial<User>>({});

  getProfile(){
    const options = {};
    return this.http.get( `${environment.apiUrl}/users/${this.storageService.getUserId()}`)
      .subscribe( ( res ) => this.userData.set( res ) );
  }
}