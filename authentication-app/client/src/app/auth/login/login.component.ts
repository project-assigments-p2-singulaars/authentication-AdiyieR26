import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../shared/models/login';
import { StorageService } from '../../core/services/storage/storage.service';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  private authService=inject(AuthService);
  router = inject(Router);
  
  loginForm: FormGroup= new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

Submit(): void {
  if (this.loginForm.valid) {
    this.authService.login(this.loginForm.value).subscribe(
      response => {
        if(response.accessToken){
          localStorage.setItem('token', response.accessToken);
          this.router.navigate(['/profile']);
        }
      },
    );
  }
}
}