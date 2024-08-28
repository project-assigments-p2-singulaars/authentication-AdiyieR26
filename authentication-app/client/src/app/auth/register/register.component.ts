import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
private authService = inject (AuthService);
jwtHelper = inject(JwtHelperService);
router = inject (Router);

registerForm: FormGroup= new FormGroup({
  name: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, 
    Validators.minLength(7)]),
});

Submit(): void {
  if (this.registerForm.valid) {
    this.authService.register(this.registerForm.value).subscribe(
      response => {
        if (response.accessToken) {
          localStorage.setItem('token', response.accessToken)
          this.router.navigate(['/profile']);   
     }          
    }
   );
  }
 }
}
