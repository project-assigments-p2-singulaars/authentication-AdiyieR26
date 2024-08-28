import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
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
          this.router.navigate(['/profile']);
        }
      },
    );
  }
}
}